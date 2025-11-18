// app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'Inter, system-ui' }}>
      <h1>TaskVision AI</h1>
      <p>AI-powered task extraction and team planning dashboard.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/login">Log in</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </main>
  );
}
