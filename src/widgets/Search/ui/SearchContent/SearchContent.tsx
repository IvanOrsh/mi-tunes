"use client";

import { MediaItem, Song } from "@/entities/Song";
import { LikeButton } from "@/features/likeSong";
import { useOnPlay } from "@/features/playSong";

type SearchContentProps = {
  songs: Song[];
};

export default function SearchContent({ songs }: SearchContentProps) {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="w-full px-6 text-zinc-400">No songs found</div>;
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={(id: string) => onPlay(id)} />
          </div>

          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
