import { Cell, stateCells } from "@/types/Cell";

export const getRulesTransitions = (universe: Cell[]): stateCells[] => {
  let updateCells: stateCells[] = [];
  let deadCells: number[] = [];
  // get live neighbours
  const liveCells = universe.filter((cell) => cell.active);

  // Any live cell
  liveCells.forEach((cell) => {
    const initialValue: number = 0;
    const sumWithInitial = cell.neighbours.reduce(
      (accumulator, currentValue) => {
        deadCells.push(currentValue);
        return accumulator + Number(universe[currentValue - 1].active);
      },
      initialValue
    );
    // update live cell
    updateCells.push({ index: cell.index, life: lifeOrDie(sumWithInitial) });
  });

  // Any dead cell
  deadCells = removeDuplicatesIndex(deadCells, universe);

  deadCells.forEach((cell) => {
    const initialValue: number = 0;
    const sumWithInitial = universe[cell - 1].neighbours.reduce(
      (accumulator, currentValue) => {
        return accumulator + Number(universe[currentValue - 1].active);
      },
      initialValue
    );
    // update dead cell
    updateCells.push({ index: cell, life: lifeOrDie(sumWithInitial) });
  });

  console.log(updateCells, deadCells);
  return updateCells;
};

const removeDuplicatesIndex = (cells: number[], universe: Cell[]): number[] => {
  const onlyCells = cells.filter(
    (item, index) => cells.indexOf(item) === index
  );
  return onlyCells.filter((item) => !universe[item - 1].active);
};

const lifeOrDie = (neighbours: number): boolean => {
  // Any live cell with fewer than two live neighbours dies, as if by underpopulation
  if (neighbours < 2 || neighbours > 3) {
    return false;
  }
  // Any live cell with two or three live neighbours lives on to the next generation
  return true;
};
