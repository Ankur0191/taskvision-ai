// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'TaskVision AI',
  description: 'AI-powered task extraction & team planning'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
