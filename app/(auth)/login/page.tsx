// app/(auth)/login/page.tsx
'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    router.push('/dashboard');
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}



