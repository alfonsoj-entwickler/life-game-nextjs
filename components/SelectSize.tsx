import { ChangeEvent } from "react";
import { useActionConfig } from "@/context/useActionConfig";
import useWindowSize from "@/hooks/useWindowSize";
import {valuesSize} from "@/helpers/valuesSelects"

const SelectSize = () => {
  const { sizeCell, setSizeCells, resetCells } = useActionConfig();
  const windowSize = useWindowSize();

  const handlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSizeCells(Number(e.target.value));
    //ToDo: delete reset layer and update cells
    resetCells(windowSize.width, windowSize.height);
  };
  return (
    <div className="flex space-x-2 text-lg outline-none">
      <label htmlFor="size-cell">Choose a size:</label>
      <select
        name="size"
        id="size-cell"
        className="outline-none"
        value={sizeCell}
        onChange={(e) => handlerSelect(e)}
      >
        {valuesSize.map((item) => (
          <option key={`size-${item.text}`} value={item.value}>{item.text}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSize;
