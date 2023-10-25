import { ChangeEvent } from "react";
import { useActionConfig } from "@/context/useActionConfig";
import useWindowSize from "@/hooks/useWindowSize";

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
        <option value="70">70</option>
        <option value="60">60</option>
        <option value="50">50</option>
        <option value="40">40</option>
        <option value="30">30</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default SelectSize;
