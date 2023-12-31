import { v4 as uuid } from "uuid";
import { create } from "zustand";
import { Cell, stateCells } from "@/types/Cell";
import randomModelCell from "@/helpers/randomModelCell";
import { getNeighboursCells } from "@/helpers/neighboursCells";
import { deleteDieNeighbours } from "@/helpers/deleteDieNeighbours";

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
  loading: boolean;
  setSizeCells: (size: number) => void;
  setModelCells: (model: string) => void;
  setCells: (cells: Cells) => void;
  resetCells: (width: number | undefined, height: number | undefined) => void;
  updateActiveCell: (states: stateCells[]) => void;
  setLoading: (status: boolean) => void;
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
  loading: false,
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
    set(({ sizeCell, modelCell, setLoading }) => {
      if (width && height) {
        let row = 1,
          column = 1;
        setLoading(true);
        const rowsCell = Math.floor((height - 128) / sizeCell);
        const columnsCell = Math.floor(width / sizeCell);
        // (window.height - (header.height + footer.height))
        const sizeArray = rowsCell * columnsCell;

        const cellsArray = Array.from(Array(sizeArray))
          .fill({
            active: false,
          })
          .map((cell, index) => {
            let i = index + 1;
            const new_cell = {
              ...cell,
              index: i,
              x: row,
              y: column,
              id: uuid(),
              model: `${
                modelCell === "random" ? randomModelCell(8) : modelCell
              }`,
              rotate: `${randomModelCell(8)}`,
              neighbours: deleteDieNeighbours(
                getNeighboursCells(rowsCell, columnsCell, i, row, column),
                0
              ),
            };
            row = i % columnsCell === 0 ? row + 1 : row;
            column = i % columnsCell === 0 ? 1 : column + 1;
            return new_cell;
          });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return {
          cells: cellsArray,
          lifeCells: 0,
          dieCells: 0,
          totalCells: 0,
          rows: rowsCell,
          columns: columnsCell,
        };
      }
      return { cells: null, lifeCells: 0, dieCells: 0, totalCells: 0 };
    }),
  // Searches for the TODO in the todos array by id, then
  // negates the current checked value and updates the state.
  updateActiveCell: (states) =>
    set(({ cells, lifeCells, dieCells, totalCells }) => {
      let currentTotal = totalCells,
        currentDie = dieCells,
        currentLife = lifeCells;
      if (cells) {
        states.forEach((item) => {
          const correctIndex = item.index - 1;
          if (cells[correctIndex].active !== item.life) {
            cells[correctIndex].active = item.life;
            cells[correctIndex].active ? currentLife++ : currentDie++;
            currentTotal++;
            // console.log(cells[correctIndex].neighbours)
          }
        });
      }
      return {
        lifeCells: currentLife,
        dieCells: currentDie,
        totalCells: currentTotal,
      };
    }),
  setLoading: (status) => set((state) => ({ loading: status })),
}));
