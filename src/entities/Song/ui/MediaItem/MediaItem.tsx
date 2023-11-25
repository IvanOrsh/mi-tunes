"use client";

import Image from "next/image";

import type { Song } from "../..";
import { useLoadImage } from "../../model/hooks/useLoadImage";

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
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:outline-2 hover:outline hover:outline-offset-2 hover:outline-white w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || "/images/liked2.png"}
          alt="Media Item"
          fill
          sizes="(100vw - 2rem) 100px"
        />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}
