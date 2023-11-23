"use client";

import type { Song } from "../..";
import SongItem from "../SongItem/SongItem";

type SongsProps = {
  songs: Song[];
};

export default function Songs({ songs }: SongsProps) {
  if (songs.length === 0) {
    return <div className="mt-4 text-zinc-400">No songs available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id: string) => {
            console.log(id);
          }}
          song={song}
        />
      ))}
    </div>
  );
}
