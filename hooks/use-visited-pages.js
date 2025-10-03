import { create } from "zustand";

const useVisitedPages = create((set) => ({
  pages: [],
  add: (url) =>
    set((state) => ({
      pages: [...state.pages, url],
    })),
  clear: () => set({ pages: [] }),
}));

export default useVisitedPages;
