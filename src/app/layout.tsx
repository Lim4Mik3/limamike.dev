import type { Metadata } from "next";
import { Client } from "./client";

export const metadata: Metadata = {
  title: "Tractian - Challenge",
  description: "Backoffice Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Client>
          {children}
        </Client>
      </body>
    </html>
  );
}
