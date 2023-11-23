"use client";

import Image from "next/image";

import { Song } from "@/entities/Song";
import { useLoadImage } from "@/entities/Song/model/hooks/useLoadImage";

type MediaItemProps = {
  data: Song;
  onClick?: (id: string) => void;
};

export default function MediaItem({ data, onClick }: MediaItemProps) {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // TODO: turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-zinc-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image src={imageUrl || "/images/liked2.png"} alt="Media Item" fill />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}
