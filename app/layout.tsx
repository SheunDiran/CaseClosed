import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaseClosed · The Blind Angle",
  description: "A cinematic detective mystery. Reconstruct the view. Challenge the story.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
