// app/dashboard/layout.tsx
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, padding: 16, borderRight: '1px solid #eee' }}>
        <h3>TaskVision</h3>
        <nav>
          <a href="/dashboard">Home</a><br/>
          <a href="/dashboard/teams">Teams</a><br/>
          <a href="/dashboard/upload">Upload</a><br/>
          <a href="/dashboard/tasks">Tasks</a><br/>
          <a href="/dashboard/analytics">Analytics</a><br/>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 24 }}>{children}</main>
    </div>
  );
}
