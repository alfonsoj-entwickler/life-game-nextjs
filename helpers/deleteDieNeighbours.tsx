export const deleteDieNeighbours = (
  neighbours: number[],
  value: number
): number[] => {
  return neighbours.filter((item) => item !== value);
};
