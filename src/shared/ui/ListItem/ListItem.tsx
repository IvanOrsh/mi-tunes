"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

export default function ListItem(props: ListItemProps) {
  const { image, name, href } = props;

  const router = useRouter();

  const onClick = () => {
    // TODO: add auth before push!
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="rounded-full relative group flex items-center overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>

      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-zinc-200 p-5 drop-shadow-md right-1 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
