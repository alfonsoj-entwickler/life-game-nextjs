import { create } from "zustand";

interface CellState {
  stateAnimations: boolean;
  setAnimation: () => void;
  stateLayer: boolean;
  setLayer: () => void;
}

export const useActionConfig = create<CellState>()((set) => ({
  stateAnimations: true,
  stateLayer: false,
  setAnimation: () => set((state) => ({ stateAnimations: !state.stateAnimations })),
  setLayer: () => set((state) => ({ stateLayer: !state.stateLayer })),
}));
