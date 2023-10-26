import { MouseEvent } from "react";
import Image from "next/image";
import { Cell as CellType } from "@/types/Cell";
import { useActionConfig } from "@/context/useActionConfig";
import { useLayerConfig } from "@/context/useLayerConfig";

type Props = {
  item: CellType;
};

const Cell = ({ item }: Props) => {
  const { sizeCell, updateActiveCell } = useActionConfig();
  const { stateAnimations } = useLayerConfig();
  const rotateModel = `rotate-${item.rotate}`;

  const handleClick = (e: MouseEvent) => {
    updateActiveCell(item.id);
  };

  return (
    <div
      className={`model-${sizeCell} cursor-pointer bg-transparent transition hover:bg-white/20`}
      onClick={(e) => handleClick(e)}
    >
      <div className={`${item.active ? "block" : "hidden"}`}>
        <div className={`${stateAnimations ? rotateModel : "rotate-none"}`}>
          <Image
            src={`assets/images/cell-model-${item.model}.svg`}
            alt="cell image"
            width={sizeCell}
            height={sizeCell}
          />
        </div>
      </div>
    </div>
  );
};

export default Cell;
