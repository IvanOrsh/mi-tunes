import Image from "next/image";

import { getLikedSongs } from "@/application/actions/getLikedSongs";
import { Header } from "@/widgets/Header";
import { LikedContent } from "@/features/likeSong";

// TODO: revalidate when user is logged in
export const revalidate = 0;

export default async function Liked() {
  const likedSongs = await getLikedSongs();

  return (
    <div className="bg-zinc-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                src="/images/liked2.png"
                alt="Playlist"
                fill
                className="grayscale"
                sizes="(100vw - 2rem) 100px"
              />
            </div>

            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-white text-sm">
                Playlist
              </p>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>

      <LikedContent songs={likedSongs} />
    </div>
  );
}
