"use client";

import { MediaItem, Song } from "@/entities/Song";

type SearchContentProps = {
  songs: Song[];
};

export default function SearchContent({ songs }: SearchContentProps) {
  if (songs.length === 0) {
    return <div className="w-full px-6 text-zinc-400">No songs found</div>;
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              data={song}
              onClick={() => {
                // TODO: open song
              }}
            />
          </div>

          {/* TODO: Like button goes here */}
        </div>
      ))}
    </div>
  );
}
