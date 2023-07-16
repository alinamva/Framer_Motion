import { create } from "zustand";

export interface IStore {
  selectedBase: string;
  selectedTopping: string[];
  setSelectedBase: (selectedBase: string) => void;
  setSelectedTopping: (selectedTopping: string[]) => void;
}

const useStore = create<IStore>((set) => ({
  selectedBase: "",
  selectedTopping: [],
  setSelectedBase: (selectedBase) => set({ selectedBase }),
  setSelectedTopping: (selectedTopping) => set({ selectedTopping }),
}));

export { useStore };
