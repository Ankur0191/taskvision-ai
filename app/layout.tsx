import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MuiThemeProvider from "@/components/MuiThemeProvider";

export const metadata = {
  title: "TaskVision AI",
  description: "AI-powered task extraction & team planning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <Navbar />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
