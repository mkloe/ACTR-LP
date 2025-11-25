import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ActMate - Your partner for learning lines",
  description: "ActMate helps actors rehearse scenes, memorize faster, and stay ready for every audition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
