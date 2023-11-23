export const getNeighboursCells = (
  rows: number,
  cols: number,
  i: number,
  x: number,
  y: number
): number[] => {
  const x_top = (x - 1) * cols,
    x_bottom = (x + 1) * cols;
  const y_left = (cols - 1) - y,
    y_right = (cols + 1) - y;
  const horizontal = cols - y;
  let i_topleft = x_top - y_left;
  let i_top = x_top - horizontal;
  let i_topright = x_top - y_right;
  let i_bottomleft = x_bottom - y_left;
  let i_bottom = x_bottom - horizontal;
  let i_bottomright = x_bottom - y_right;
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
