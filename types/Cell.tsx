export type Cell = {
  id: string;
  index: number;
  x: number;
  y: number;
  active: boolean;
  model?: string;
  rotate?: string;
  neighbours: number[];
};

export type stateCells = {
  index: number;
  life: boolean;
};