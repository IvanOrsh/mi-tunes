"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Song } from "@/entities/Song";
import { useUser } from "@/application/providers/UserProvider";
import { MediaItem } from "@/entities/Song";
import { LikeButton } from "../..";

type LikedContentProps = {
  songs: Song[];
};

export default function LikedContent({ songs }: LikedContentProps) {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return <div className="px-6 text-zinc-400">No liked songs</div>;
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="flex items-center gap-x-4 w-full max-w-lg"
        >
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>

          <div>
            <LikeButton songId={song.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
