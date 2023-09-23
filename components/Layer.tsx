"use client";
import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import Cell from "./Cell";
import { Cell as CellType } from "@/types/Cell";
import useWindowSize from "@/hooks/useWindowSize";

const Layer = () => {
  const [cells, setCells] = useState<CellType[]>([]);
  const windowSize = useWindowSize()

  useEffect(()=>{
    if(windowSize.width && windowSize.height){
      const sizeArray = Math.floor(windowSize.width/50) * Math.floor(windowSize.height/50);

      const cellsArray = Array.from(Array(sizeArray)).fill({
        id: "1",
        action: true,
        model: "1",
        active: false, 
      },).map((cell,index) => ({ ...cell, id: index}))
 
      
      setCells(cellsArray);
    }
    
  }, [windowSize]);

  const handleMove = (e: MouseEvent) => {
    //console.log("MouseEvent--> ", e);
  };

  const handleClick = (e: MouseEvent) => {
    //console.log("ClickEvent--> ",e, e.pageX, e.pageY);
    /*
      setCells([
        ...cells,
        {
          id: "1",
          action: true,
          model: "1",
          active: true, 
        },
      ])
    */
    ;
  };

  return (
    <div
      //onMouseMove={(e) => handleMove(e)}
      onClick={(e) => handleClick(e)}
      className="relative w-full h-screen flex flex-wrap justify-center items-center"
    >
      {cells.length > 0 &&
        cells.map((item) => (
          <Cell
            key={`cell-${item.id}`}
            item={item}
          />
        ))}
    </div>
  );
};
export default Layer;
