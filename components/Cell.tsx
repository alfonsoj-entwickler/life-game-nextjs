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
  const { stateAnimations, stateIndex } = useLayerConfig();
  const rotateModel = `rotate-${item.rotate}`;

  const handleClick = (e: MouseEvent) => {
    updateActiveCell(item.id);
  };

  return (
    <button
      type="button"
      className={`relative model-${sizeCell} cursor-pointer bg-transparent transition hover:bg-white/20`}
      onClick={(e) => handleClick(e)}
      tabIndex={item.index}
      aria-label={`cell ${item.index} model ${item.model}`}
    >
      <span
        className={`${
          stateIndex ? "flex" : "hidden"
        } absolute inset-0 -z-10 justify-center items-center text-xs text-slate-100/60`}
      >
        {item.index}
      </span>
      <div className={`overflow-hidden ${item.active ? "block" : "hidden"}`}>
        <div className={`${stateAnimations ? rotateModel : "rotate-none"}`}>
          <Image
            src={`assets/images/cell-model-${item.model}.svg`}
            alt="cell image"
            width={sizeCell}
            height={sizeCell}
          />
        </div>
      </div>
    </button>
  );
};

export default Cell;
