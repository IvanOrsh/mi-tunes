import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Sidebar } from "@/widgets/Sidebar";
import "@/application/styles/globals.css";
import { SupabaseProvider } from "@/application/providers/Supabase";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mi-tunes",
  description: "Throw some tunes with mi-tunes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <Sidebar>{children}</Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
