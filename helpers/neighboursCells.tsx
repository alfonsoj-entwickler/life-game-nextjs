export const getNeighboursCells = (
  rows: number,
  cols: number,
  i: number,
  x: number,
  y: number
): number[] => {
  const x_top = (x - 1) * cols,
    x_bottom = (x + 1) * cols;

  const y_right = (cols - 1) - y,
    y_left = (cols + 1) - y;

  const horizontal = cols - y;

  let i_topright = x_top - y_right;
  i_topright = checkTop(i_topright, cols, x);

  let i_top = x_top - horizontal;
  i_top = checkTop(i_top, cols, x);

  let i_topleft = x_top - y_left;
  i_topleft = checkTop(i_topleft, cols, x);

  let i_bottomright = x_bottom - y_right;
  i_bottomright = checkBottom(i_bottomright, rows, cols, x);

  let i_bottom = x_bottom - horizontal;
  i_bottom = checkBottom(i_bottom, rows, cols, x);

  let i_bottomleft = x_bottom - y_left;
  i_bottomleft = checkBottom(i_bottomleft, rows, cols, x);

  const i_right = Math.ceil((i + 1)/cols) > x ? 0 : i+1;
  const i_left = Math.ceil((i - 1)/cols) < x ? 0 : i-1;

  return [
    i_top,
    i_topright,
    i_right,
    i_bottomright,
    i_bottom,
    i_bottomleft,
    i_left,
    i_topleft,
  ];

};

const checkTop = (position: number, columns: number, x: number ):number => {
  return (position < 1 || Math.ceil(position/columns) !== x - 1) ? 0 : position;
}

const checkBottom = ( position: number, rows: number, columns: number, x: number ):number => {
  return (position > (rows * columns) || Math.ceil(position/columns) !== x + 1 ) ? 0 : position;
}

 