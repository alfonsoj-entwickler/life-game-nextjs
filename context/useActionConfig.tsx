import { v4 as uuid } from "uuid";
import { create } from "zustand";
import { Cell } from "@/types/Cell";
import randomModelCell from "@/helpers/randomModelCell";

export type Cells = Cell[] | null;

interface CellState {
  cells: Cells;
  setCells: (cells: Cells) => void;
  resetCells: (width: number | undefined, height: number | undefined) => void;
  stateAnimations: boolean;
  setAnimation: () => void;
  stateLayer: boolean;
  setLayer: () => void;
}

export const useActionConfig = create<CellState>()((set) => ({
  cells: null,
  setCells: (cells) => set(() => ({ cells })),
  // Creates a new Cell object and appends it to the current todos state.
  resetCells: (width, height) =>
    set(({ cells }) => {
      if (width && height) {
        const sizeArray = Math.floor(width / 40) * Math.floor(height / 40);

        const cellsArray = Array.from(Array(sizeArray))
          .fill({
            active: false,
          })
          .map((cell) => ({
            ...cell,
            id: uuid(),
            model: `${randomModelCell(7)}`,
            rotate: `${randomModelCell(7)}`,
          }));
        return { cells: cellsArray };
      }
      return { cells: null };
    }),
  stateAnimations: true,
  stateLayer: false,
  setAnimation: () =>
    set((state) => ({ stateAnimations: !state.stateAnimations })),
  setLayer: () => set((state) => ({ stateLayer: !state.stateLayer })),
}));
