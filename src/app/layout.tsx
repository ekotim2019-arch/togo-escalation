import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JNIM Threat Assessment — Kairos Arc",
  description: "Togo-Burkina Faso Border Corridor Intelligence Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-slate antialiased">{children}</body>
    </html>
  );
}
