import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  volume: number;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  setVolume: (volume: number) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  volume: 0.8,

  setId: (id) => set({ activeId: id }),
  setIds: (ids) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  setVolume: (volume: number) => set({ volume }),
}));

export default usePlayer;
