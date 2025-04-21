
import { useProfileQuery, useUpsertProfileMutation } from "@/hooks/useProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const { data: profile, isLoading } = useProfileQuery();
  const upsertProfile = useUpsertProfileMutation();

  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  // Sync local state with profile data
  useEffect(() => {
    setName(profile?.name ?? "");
    setAge(profile?.age ?? "");
  }, [profile?.name, profile?.age]);

  if (loading || isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <div className="flex h-screen items-center justify-center">Not signed in</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || age === "") {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    upsertProfile.mutate(
      { name, age: Number(age) },
      {
        onSuccess: () => {
          toast({ title: "Profile saved!" });
        },
        onError: (err: any) => {
          toast({
            title: "Error updating profile",
            description: err?.message ?? "Unknown error",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                min={0}
                onChange={e => setAge(Number(e.target.value))}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={upsertProfile.isPending}>
              {profile ? "Update" : "Create"} Profile
            </Button>
            {profile && (
              <div className="mt-6 text-sm text-muted-foreground text-center">
                <div>
                  <span className="font-bold">Current Name:</span> {profile.name ?? "--"}
                </div>
                <div>
                  <span className="font-bold">Current Age:</span> {profile.age ?? "--"}
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
