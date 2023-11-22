import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Sidebar } from "@/widgets/Sidebar";
import { SupabaseProvider } from "@/application/providers/Supabase";
import { UserProvider } from "@/application/providers/UserProvider";
import { ModalProvider } from "@/application/providers/ModalProvider";
import "@/application/styles/globals.css";

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
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
