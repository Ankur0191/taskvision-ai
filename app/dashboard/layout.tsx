import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <DashboardSidebar />

      <div style={{ marginLeft: "240px", width: "100%" }}>
        <DashboardNavbar />
        <main style={{ padding: "24px" }}>{children}</main>
      </div>
    </div>
  );
}
