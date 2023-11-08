import { create } from "zustand";
import { IntervalType } from "@/types/Time";

interface LayerState {
  stateClock: IntervalType;
  stateAnimations: boolean;
  stateLayer: boolean;
  stateLoading: boolean;
  stateWorld: boolean;
  stateIndex: boolean;
  resetClock: () => void;
  setLoading: () => void;
  setLayer: (status: boolean) => void;
  setWorld: (status: boolean) => void;
  setIndex: (status: boolean) => void;
  setClock: (status: IntervalType) => void;
  setAnimation: (status: boolean) => void;
  changeInterval: (statetInterval: number) => void;
}

export const useLayerConfig = create<LayerState>()((set) => ({
  stateClock: {
    id: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      interval: 250,
    },
  },
  stateAnimations: true,
  stateLayer: false,
  stateLoading: false,
  stateWorld: false,
  stateIndex: false,
  setAnimation: (status) => set((state) => ({ stateAnimations: status })),
  setLayer: (status) => set((state) => ({ stateLayer: status })),
  setLoading: () => set((state) => ({ stateLoading: !state.stateLoading })),
  setWorld: (status) => set((state) => ({ stateWorld: status })),
  setIndex: (status) => set((state) => ({ stateIndex: status })),
  setClock: (status) => set((state) => ({ stateClock: status })),
  changeInterval: (statetInterval) =>
    set((state) => ({
      stateClock: {
        id: state.stateClock.id,
        time: {
          ...state.stateClock.time,
          interval: statetInterval,
        },
      },
    })),
  resetClock: () =>
    set((state) => ({
      stateClock: {
        id: 0,
        time: {
          hours: 0,
          minutes: 0,
          seconds: 0,
          miliseconds: 0,
          interval: 250,
        },
      },
    })),
}));
