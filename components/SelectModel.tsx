import { ChangeEvent } from "react";
import { useActionConfig } from "@/context/useActionConfig";

const SelectModel = () => {
  const { modelCell, setModelCells } = useActionConfig();

  const handlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setModelCells(e.target.value);
  };
  return (
    <div className="flex space-x-2 text-lg">
      <label htmlFor="model-cell">Choose a model:</label>
      <select
        name="models"
        id="model-cell"
        className="outline-none"
        value={modelCell}
        onChange={(e) => handlerSelect(e)}
      >
        <option value="random">Random</option>
        <option value="1">Cell 1</option>
        <option value="2">Cell 2</option>
        <option value="3">Cell 3</option>
        <option value="4">Cell 4</option>
        <option value="5">Cell 5</option>
        <option value="6">Cell 6</option>
        <option value="7">Cell 7</option>
      </select>
    </div>
  );
};

export default SelectModel;
