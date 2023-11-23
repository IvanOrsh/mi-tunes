"use client";

import { useGetSongById } from "../../model/services/useGetSongById";
import usePlayer from "../../model/store/usePlayer";
import { useLoadSongUrl } from "../../model/hooks/useLoadSongUrl";
import PlayerContent from "../PlayerContent/PlayerContent";

export default function Player() {
  const player = usePlayer();
  const { song, isLoading } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 px-4 h-[80px]">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}
