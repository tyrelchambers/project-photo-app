import create from "zustand";

export const useNewPostStore = create((set) => ({
  images: [],
  setImages: (images) => set((state) => ({ ...state, images })),
}));
