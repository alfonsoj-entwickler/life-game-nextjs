export const getNeighboursCells = (
  rows: number,
  cols: number,
  i: number,
  x: number,
  y: number
): number[] => {
  const left = i-1, right = i+1; 
  let i_topright = right - cols;
  i_topright = checkTop(i_topright, cols, x);

  let i_top = i - cols;
  i_top = checkTop(i_top, cols, x);

  let i_topleft = left - cols;
  i_topleft = checkTop(i_topleft, cols, x);

  let i_bottomright = right + cols;
  i_bottomright = checkBottom(i_bottomright, rows, cols, x);

  let i_bottom = i + cols;
  i_bottom = checkBottom(i_bottom, rows, cols, x);

  let i_bottomleft = left + cols;
  i_bottomleft = checkBottom(i_bottomleft, rows, cols, x);

  const i_right = Math.ceil(right/cols) > x ? 0 : right;
  const i_left = Math.ceil(left/cols) < x ? 0 : left;

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

 