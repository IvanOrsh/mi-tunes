"use client";

import Image from "next/image";

import type { Song } from "../..";
import { useLoadImage } from "../../model/hooks/useLoadImage";
import { PlayButton } from "@/shared/ui";

type SongItemProps = {
  song: Song;
  onClick: (id: string) => void;
};

export default function SongItem(props: SongItemProps) {
  const { song, onClick } = props;

  const imageUrl = useLoadImage(song);

  return (
    <div
      onClick={() => onClick(song.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-zinc-700/50 cursor-pointer hover:bg-zinc-700/20 transition p-3 duration-200"
    >
      {/* image */}
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/placeholder.png"}
          alt="Song image"
        />
      </div>

      {/* info */}
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {song.author}
        </p>
      </div>

      {/* play button */}
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
}
