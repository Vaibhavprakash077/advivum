
import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";
import { useQueryClient } from "@tanstack/react-query";

type Profile = {
  user_id: string;
  name: string | null;
  age: number | null;
};

interface AuthCtx {
  user: User | null;
  session: Session | null;
  loading: boolean;
  profile: Profile | null;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const queryClient = useQueryClient();

  // fetchProfile: fetches for current user
  const fetchProfile = async (uid: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_id", uid)
      .single();
    if (error || !data) {
      setProfile(null);
      return;
    }
    setProfile(data);
  };

  // Refetch profile (manually or after update)
  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    }
  };

  useEffect(() => {
    // Auth state listener
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        // Defer Supabase calls – avoid deadlocks
        setTimeout(() => {
          fetchProfile(session.user.id);
        }, 0);
      } else {
        setProfile(null);
      }
    });
    // Initial getSession
    supabase.auth.getSession().then(({ data: { session }}) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });
    return () => { listener.subscription.unsubscribe(); }
  }, []);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    // No profile row created on sign up, user must complete profile first
    return { error: error?.message ?? null };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, profile, signUp, signIn, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
