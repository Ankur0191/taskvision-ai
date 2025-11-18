"use client";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <header
      style={{
        height: "60px",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 20px",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
