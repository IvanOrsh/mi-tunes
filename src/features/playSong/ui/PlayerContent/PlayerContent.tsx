"use client";

import { useEffect, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import useSound from "use-sound";

import { MediaItem, type Song } from "@/entities/Song";
import { LikeButton } from "@/features/likeSong";
import { Slider } from "@/shared/ui";
import usePlayer from "../../model/store/usePlayer";

type PlayerContentProps = {
  song: Song;
  songUrl: string;
};

export default function PlayerContent({ song, songUrl }: PlayerContentProps) {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    // no songs to play
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);

    const nextSong = player.ids[currentIndex + 1];

    // last song
    if (!nextSong) {
      return;
    }

    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    // no songs to play
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);

    const prevSong = player.ids[currentIndex - 1];

    // load last song
    if (!prevSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(prevSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  // play on load
  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      {/* for mobile */}
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} className="text-black" />
        </div>
      </div>

      {/* for desktop */}
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[772px] gap-x-6">
        {/* prev */}
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="text-zinc-400 cursor-pointer hover:text-white transition"
        />

        {/* play */}
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>

        {/* next */}
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="text-zinc-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="hidden h-full md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={30}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
}
