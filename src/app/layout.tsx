import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Sidebar } from "@/widgets/Sidebar";
import { SupabaseProvider } from "@/application/providers/Supabase";
import { UserProvider } from "@/application/providers/UserProvider";
import { ModalProvider } from "@/application/providers/ModalProvider";
import { ToasterProvider } from "@/application/providers/ToasterProvider";
import { getSongsByUserId } from "@/application/actions/getSongsByUserId";
import { Player } from "@/features/playSong";

import "@/application/styles/globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mi-tunes",
  description: "Throw some tunes with mi-tunes",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
