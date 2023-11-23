import type { Song } from "@/entities/Song";
import usePlayer from "../store/usePlayer";
import { useAuthModal } from "@/features/auth";
import { useUser } from "@/application/providers/UserProvider";

export default function useOnPlay(songs: Song[]) {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
}
