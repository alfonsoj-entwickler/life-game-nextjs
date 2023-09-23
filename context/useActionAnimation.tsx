import { create } from "zustand";

interface CellState {
  bears: boolean;
  increase: (by: boolean) => void;
}

const useActionAnimation = create<CellState>()((set) => ({
  bears: true,
  increase: (by) => set((state) => ({ bears: by })),
}));
