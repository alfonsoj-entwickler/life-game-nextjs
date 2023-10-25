import { create } from "zustand";

interface LayerState {
  stateAnimations: boolean;
  setAnimation: () => void;
  stateLayer: boolean;
  setLayer: () => void;
}

export const useLayerConfig = create<LayerState>()((set) => ({
  stateAnimations: true,
  stateLayer: false,
  setAnimation: () =>
    set((state) => ({ stateAnimations: !state.stateAnimations })),
  setLayer: () => set((state) => ({ stateLayer: !state.stateLayer })),
}));
