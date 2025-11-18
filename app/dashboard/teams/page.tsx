"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function TeamsPage() {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeams();
  }, []);

  async function loadTeams() {
    setLoading(true);

    // Get logged-in user session CLIENT-SIDE
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setTeams([]);
      setLoading(false);
      return;
    }

    const userId = session.user.id;

    const { data, error } = await supabase
      .from("team_members")
      .select("teams(*)")
      .eq("user_id", userId);

    if (error) {
      console.error(error);
    }

    const flattened = data?.map((row) => row.teams) ?? [];

    setTeams(flattened);
    setLoading(false);
  }

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Your Teams</h1>

      <Link
        href="/dashboard/teams/create"
        style={{
          padding: "10px 16px",
          background: "#1976d2",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Create Team
      </Link>

      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : teams.length === 0 ? (
          <p>No teams yet.</p>
        ) : (
          teams.map((team) => (
            <div
              key={team.id}
              style={{
                padding: "15px",
                border: "1px solid #eee",
                marginBottom: "12px",
                borderRadius: "8px",
                background: "white",
              }}
            >
              <h3>{team.name}</h3>
              <p>Slug: {team.slug}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
