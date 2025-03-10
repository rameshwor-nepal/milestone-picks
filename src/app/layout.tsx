import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milestone Picks",
  description: "Number one betting picks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
