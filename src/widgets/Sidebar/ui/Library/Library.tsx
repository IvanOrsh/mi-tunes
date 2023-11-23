"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { useAuthModal } from "@/features/auth";
import { useUser } from "@/application/providers/UserProvider";
import { useUploadModal } from "@/features/upload";
import type { Song } from "@/entities/Song";
import MediaItem from "./MediaItem";

type LibraryProps = {
  songs: Song[];
};

export default function Library({ songs }: LibraryProps) {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    // check if user is logged in
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: check for subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-zinc-400" />
          <p className="text-zinc-400 font-medium text-md">Your Library</p>
        </div>

        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-5">
        {songs.map((song) => (
          <MediaItem key={song.id} onClick={() => {}} data={song} />
        ))}
      </div>
    </div>
  );
}
