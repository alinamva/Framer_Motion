// library
import { create } from "zustand";

export interface IStore {
  selectedBase: string;
  selectedTopping: number[];
  setSelectedBase: (selectedBase: string) => void;
  setSelectedTopping: (selectedTopping: number[]) => void;
}
const useStore = create<IStore>((set) => ({
  selectedBase: "",
  selectedTopping: [],
  setSelectedBase: (selectedBase) => set({ selectedBase }),
  setSelectedTopping: (selectedTopping) => set({ selectedTopping }),
}));

export { useStore };
