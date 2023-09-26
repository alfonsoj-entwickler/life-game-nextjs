import { create } from "zustand";

interface CellState {
  stateAnimations: boolean;
  setAnimation: () => void;
}

export const useActionAnimation = create<CellState>()((set) => ({
  stateAnimations: true,
  setAnimation: () => set((state) => ({ stateAnimations: !state.stateAnimations })),
}));
