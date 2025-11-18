export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #eee",
      }}
    >
      <p style={{ marginBottom: "6px", color: "#555" }}>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
