import { v4 as uuid } from "uuid";
import { create } from "zustand";
import { Cell } from "@/types/Cell";
import randomModelCell from "@/helpers/randomModelCell";

export type Cells = Cell[] | null;

interface CellState {
  cells: Cells;
  sizeCell: number;
  modelCell: string;
  lifeCells: number;
  dieCells: number;
  totalCells: number;
  rows: number;
  columns: number;
  setSizeCells: (size: number) => void;
  setModelCells: (model: string) => void;
  setCells: (cells: Cells) => void;
  resetCells: (width: number | undefined, height: number | undefined) => void;
  updateActiveCell: (id: string) => void;
}

export const useActionConfig = create<CellState>()((set) => ({
  cells: null,
  sizeCell: 40,
  modelCell: "random",
  lifeCells: 0,
  dieCells: 0,
  totalCells: 0,
  rows: 0,
  columns: 0,
  setSizeCells: (size) => set(() => ({ sizeCell: size })),
  setModelCells: (model) =>
    set(({ cells }) => {
      const updateCells = cells?.map((cell) => ({
        ...cell,
        model: `${model === "random" ? randomModelCell(8) : model}`,
      }));
      return { cells: updateCells, modelCell: model };
    }),
  setCells: (cells) => set(() => ({ cells })),
  // Creates  Cells object and appends it to the current todos state.
  resetCells: (width, height) =>
    set(({ sizeCell, modelCell }) => {
      if (width && height) {
        const rowsCell = Math.floor((height - 128) / sizeCell);
        const columnsCell = Math.floor(width / sizeCell);
        // (window.height - (header.height + footer.height))
        const sizeArray =
        rowsCell * columnsCell;

        const cellsArray = Array.from(Array(sizeArray))
          .fill({
            active: false,
          })
          .map((cell, index) => ({
            ...cell,
            index,
            id: uuid(),
            model: `${modelCell === "random" ? randomModelCell(8) : modelCell}`,
            rotate: `${randomModelCell(8)}`,
          }));
        return { cells: cellsArray, lifeCells: 0, dieCells: 0, totalCells: 0, rows: rowsCell, columns: columnsCell };
      }
      return { cells: null, lifeCells: 0, dieCells: 0, totalCells: 0 };
    }),
  // Searches for the todo in the todos array by id, then
  // negates the current checked value and updates the state.
  updateActiveCell: (id) =>
    set(({ cells, lifeCells }) => {
      let total = lifeCells;
      const updatedCells = cells!.map((cell) => {
        if (cell.id === id) {
          cell.active ? total-- : total++;
          return {
            ...cell,
            active: !cell.active,
          };
        }
        return cell;
      });

      return { cells: updatedCells, lifeCells: total, totalCells: total };
    }),
}));
