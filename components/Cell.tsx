import { MouseEvent } from "react";
import Image from "next/image";
import { Cell as CellType } from "@/types/Cell";
import { useActionConfig } from "@/context/useActionConfig";
import { useLayerConfig } from "@/context/useLayerConfig";
import randomModelCell from "@/helpers/randomModelCell";

type Props = {
  item: CellType;
};

const Cell = ({ item }: Props) => {
  const { sizeCell, updateActiveCell } = useActionConfig();
  const { stateAnimations, stateIndex } = useLayerConfig();
  const rotateModel = `rotate-${item.rotate}`;
  const opacityModel = `opacity-animate-${randomModelCell(3)}`;

  const handleClick = (e: MouseEvent) => {
    updateActiveCell([{ index: item.index, life: !item.active }]);
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
        } flex-col absolute inset-0 -z-10 justify-center items-center`}
      >
        <span
          className={`${
            sizeCell == 20 ? "hidden" : "inline"
          } text-sm text-slate-100/60`}
        >
          {item.index}
        </span>
        <span className="hidden text-xs text-green-100/60">
          ({item.x},{item.y})
        </span>
        <span className="absolute top-0 left-0 w-full h-full border border-solid border-slate-500/30" />
      </span>
      <div
        className={`relative overflow-hidden ${
          item.active ? "block" : "hidden"
        } w-full h-full`}
      >
        {item.model === "c" ? (
          <div className={`absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 w-full h-full border-2 ${stateAnimations ? opacityModel : "opacity-none"}`} />
        ) : (
          <div className={`${stateAnimations ? rotateModel : "rotate-none"}`}>
            <Image
              src={`assets/images/cell-model-${item.model}.svg`}
              alt="cell image"
              width={sizeCell}
              height={sizeCell}
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default Cell;
