import { create } from "zustand";

type UnifromState = {
  cat: string;
  setCat: (cat: string) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};
export const useUniform = create<UnifromState>((set) => ({
  cat: "",
  setCat: (cat) => set({ cat }),
  currentPage: 1,
  setCurrentPage: (currentPage) => set({ currentPage }),
}));
