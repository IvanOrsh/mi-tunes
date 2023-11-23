import { useSupabaseClient } from "@supabase/auth-helpers-react";

import type { Song } from "@/entities/Song";

export async function useLoadSongUrl(song: Song) {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData } = await supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
}
