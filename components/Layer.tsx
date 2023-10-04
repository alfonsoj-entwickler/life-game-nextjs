"use client";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import { Cell as CellType } from "@/types/Cell";
import useWindowSize from "@/hooks/useWindowSize";
import randomModelCell from "@/helpers/randomModelCell";

const Layer = () => {
  const [cells, setCells] = useState<CellType[]>([]);
  const windowSize = useWindowSize();

  const resetCellsLayer = () => {
    if (windowSize.width && windowSize.height) {
      const sizeArray =
        Math.floor(windowSize.width / 50) * Math.floor(windowSize.height / 50);

      const cellsArray = Array.from(Array(sizeArray))
        .fill({
          active: false,
        })
        .map((cell, index) => ({
          ...cell,
          id: index,
          model: `${randomModelCell(7)}`,
          rotate: `${randomModelCell(7)}`,
        }));

      setCells(cellsArray);
    }
  }

  useEffect(() => {
    resetCellsLayer()
  }, [windowSize]);

  return (
    <div className="relative w-full h-screen flex flex-wrap justify-center items-center">
      {cells.length > 0 &&
        cells.map((item) => <Cell key={`cell-${item.id}`} item={item} />)}
    </div>
  );
};
export default Layer;
