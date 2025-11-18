"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function CreateTeamPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  function slugify(str: string) {
    return str.toLowerCase().trim().replace(/ /g, "-");
  }

  async function handleCreate(e: any) {
    e.preventDefault();

    const slug = slugify(name);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Insert into teams
    const { data: team, error } = await supabase
      .from("teams")
      .insert({ name, slug, owner: user?.id })
      .select()
      .single();

    if (error) return alert(error.message);

    // Insert into team_members
    await supabase.from("team_members").insert({
      team_id: team.id,
      user_id: user?.id,
      role: "admin",
    });

    router.push("/dashboard/teams");
  }

  return (
    <div>
      <h1>Create Team</h1>

      <form onSubmit={handleCreate} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Team name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            background: "#1976d2",
            color: "white",
            borderRadius: "6px",
            border: "none",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
