
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";

export function useProfileQuery() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();
      if (error && error.code !== "PGRST116") throw error; // PGRST116: No rows found
      return data;
    },
    enabled: !!user,
  });
}

export function useUpsertProfileMutation() {
  const { user, refreshProfile } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, age }: { name: string; age: number }) => {
      if (!user) throw new Error("Not authenticated");
      // Upsert (insert if not existing)
      const { data, error } = await supabase
        .from("profiles")
        .upsert(
          [{ user_id: user.id, name, age }],
          { onConflict: "user_id" }
        )
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: async () => {
      await refreshProfile();
      queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
    },
  });
}
