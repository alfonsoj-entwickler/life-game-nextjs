import { create } from "zustand";

interface LayerState {
  stateAnimations: boolean;
  setAnimation: (status: boolean) => void;
  stateLayer: boolean;
  setLayer: (status: boolean) => void;
  stateLoading: boolean;
  setLoading: () => void;
  stateWorld: boolean;
  setWorld: (status: boolean) => void;
  stateIndex: boolean;
  setIndex: (status: boolean) => void;
}

export const useLayerConfig = create<LayerState>()((set) => ({
  stateAnimations: true,
  stateLayer: false,
  stateLoading: false,
  stateWorld: false,
  stateIndex: false,
  setAnimation: (status) =>
    set((state) => ({ stateAnimations: status })),
  setLayer: (status) => set((state) => ({ stateLayer: status })),
  setLoading: () => set((state) => ({ stateLoading: !state.stateLoading })),
  setWorld: (status) => set((state) => ({ stateWorld: status })),
  setIndex: (status) => set((state) => ({ stateIndex: status })),
}));
