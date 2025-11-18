"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Teams", href: "/dashboard/teams" },
    { name: "Upload", href: "/dashboard/upload" },
    { name: "Tasks", href: "/dashboard/tasks" },
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Reports", href: "/dashboard/reports" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside
      style={{
        width: "240px",
        padding: "20px",
        borderRight: "1px solid #eee",
        height: "100vh",
        position: "fixed",
        background: "white",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>TaskVision</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "10px",
                borderRadius: "6px",
                background: active ? "#f1f5f9" : "transparent",
                color: active ? "#1976d2" : "#333",
                textDecoration: "none",
                fontWeight: active ? 600 : 400,
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
