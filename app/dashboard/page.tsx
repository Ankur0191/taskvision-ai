import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Dashboard Overview</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <StatCard title="Total Tasks" value="0" />
        <StatCard title="Completed" value="0" />
        <StatCard title="Pending" value="0" />
        <StatCard title="Team Members" value="0" />
      </div>
    </div>
  );
}
