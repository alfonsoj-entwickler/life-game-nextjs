"use client";
import { useEffect } from "react";
import Cell from "./Cell";
import useWindowSize from "@/hooks/useWindowSize";
import { useActionConfig } from "@/context/useActionConfig";
import { useLayerConfig } from "@/context/useLayerConfig";
import Loader from "./Loader";

const Layer = () => {
  const { cells, loading, resetCells } = useActionConfig();
  const { stateLayer } = useLayerConfig();
  const windowSize = useWindowSize();

  useEffect(() => {
    resetCells(windowSize.width, windowSize.height);
  }, [resetCells, windowSize.width, windowSize.height]);

  return (
    <main
      className={`relative flex-1 w-full h-screen flex flex-wrap justify-center items-center ${
        stateLayer && "pointer-events-none"
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {cells?.map((item) => (
            <Cell key={`cell-${item.id}`} item={item} />
          ))}
        </>
      )}
    </main>
  );
};
export default Layer;
