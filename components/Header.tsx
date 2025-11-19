"use client";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <Navbar />
    </header>
  );
}
