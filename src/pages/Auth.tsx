
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp, user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    setTimeout(() => navigate("/dashboard"), 0);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    let result;
    if (mode === "login") {
      result = await signIn(email, password);
      if (!result.error) {
        toast({ title: "Login successful" });
        navigate("/dashboard");
      } else {
        toast({ title: "Login failed", description: result.error, variant: "destructive" });
      }
    } else {
      result = await signUp(email, password);
      if (!result.error) {
        toast({ title: "Sign up successful! Check your inbox to confirm your email." });
        setMode("login");
      } else {
        toast({ title: "Sign up failed", description: result.error, variant: "destructive" });
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="w-full max-w-sm space-y-6 rounded-lg border p-8 shadow-lg bg-background"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-2 text-center">{mode === "login" ? "Login" : "Sign Up"}</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            autoComplete="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>
        <div className="text-center text-sm">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-primary underline"
                onClick={() => setMode("signup")}
                disabled={loading}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary underline"
                onClick={() => setMode("login")}
                disabled={loading}
              >
                Login
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
