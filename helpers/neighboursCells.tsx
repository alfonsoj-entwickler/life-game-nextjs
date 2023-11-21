export const getNeighboursCells = (
  rows: number,
  cols: number,
  i: number,
  x: number,
  y: number
): number[] => {
  let i_topleft = (x - 1) * cols - (cols - 1 - y);
  let i_bottomleft = (x + 1) * cols - (cols - 1 - y);
  let i_top = (x - 1) * cols - (cols - y);
  let i_bottom = (x + 1) * cols - (cols - y);
  let i_topright = (x - 1) * cols - (cols + 1 - y);
  let i_bottomright = (x + 1) * cols - (cols + 1 - y);
  let i_left = i + 1;
  let i_right = i - 1;
  return [
    i_top,
    i_topleft,
    i_left,
    i_bottomleft,
    i_bottom,
    i_bottomright,
    i_right,
    i_topright,
  ];
};
