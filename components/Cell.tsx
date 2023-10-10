import { useState, MouseEvent } from "react";
import Image from "next/image";
import { Cell as CellType } from "@/types/Cell";
import { useActionConfig } from "@/context/useActionConfig";

type Props = {
  item: CellType;
};

const Cell = ({ item }: Props) => {
  const [cells, setCells] = useState<CellType>({
    id: item.id,
    active: item.active,
    model: item.model,
    rotate: item.rotate,
  });
  const { stateAnimations } = useActionConfig();

  const handleClick = (e: MouseEvent) => {
    //console.log("ClickEvent--> ",e, e.pageX, e.pageY);
    setCells({
      ...cells,
      active: !cells.active,
    });
  };

  return (
    <div
      className="w-[40px] h-[40px] cursor-pointer"
      onClick={(e) => handleClick(e)}
    >
      <div className={`${cells.active ? "block" : "hidden"}`}>
        <div className={`${stateAnimations && `rotate-${cells.rotate}`}`}>
          <Image
            src={`assets/images/cell-model-${cells.model}.svg`}
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
