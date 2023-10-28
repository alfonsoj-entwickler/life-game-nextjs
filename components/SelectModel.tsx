import { ChangeEvent } from "react";
import { useActionConfig } from "@/context/useActionConfig";
import { valuesModels } from "@/helpers/valuesSelects";

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
        {valuesModels.map((item) => (
          <option key={`model-${item.value}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectModel;
