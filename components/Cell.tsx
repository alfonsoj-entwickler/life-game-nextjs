import { useState, MouseEvent } from "react";
import Image from "next/image";
import { Cell as CellType } from "@/types/Cell";
import randomModelCell from "@/helpers/randomModelCell";

type Props = {
  item: CellType;
};

const Cell = ({ item }: Props) => {
  const [cells, setCells] = useState<CellType>({
    id: item.id,
    active: item.active,
    action: item.action,
    model: item.model,
  });

  const handleClick = (e: MouseEvent) => {
    //console.log("ClickEvent--> ",e, e.pageX, e.pageY);
    setCells({
      ...cells,
      active: !cells.active,
    });
  };

  return (
    <div
    id={`cell-${cells.id}`}
      className="w-[50px] h-[50px] cursor-pointer "
      onClick={(e) => handleClick(e)}
    >
      <div className={`${cells.active ? "block" : "hidden"}`}>
        <div className={`${cells.action && `rotate-${randomModelCell(5)}`}`}>
          <Image
            src={`assets/images/cell-model-${randomModelCell(5)}.svg`}
            alt="cell image"
            width={50}
            height={50} 
          />
        </div>
      </div>
    </div>
  );
};

export default Cell;
