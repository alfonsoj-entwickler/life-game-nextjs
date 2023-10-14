"use client";
import { useEffect } from "react";
import Cell from "./Cell";
import useWindowSize from "@/hooks/useWindowSize";
import { useActionConfig } from "@/context/useActionConfig";

const Layer = () => {
  const { cells, stateLayer, resetCells } = useActionConfig();
  const windowSize = useWindowSize();

  useEffect(() => {
    resetCells(windowSize.width, windowSize.height);
  }, [windowSize]);

  return (
    <main
      className={`relative flex-1 w-full h-screen flex flex-wrap justify-center items-center ${
        stateLayer && "pointer-events-none"
      }`}
    >
      {cells?.map((item) => (
        <Cell key={`cell-${item.id}`} item={item} />
      ))}
    </main>
  );
};
export default Layer;
