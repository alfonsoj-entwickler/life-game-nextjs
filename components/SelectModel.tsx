const SelectModel = () => {
    return(
        <div className="flex space-x-2">
          <label htmlFor="model-cell">Choose a model:</label>
          <select name="models" id="model-cell">
            <option value="random">Random</option>
            <option value="cell-1">Cell 1</option>
            <option value="cell-2">Cell 2</option>
            <option value="cell-3">Cell 3</option>
            <option value="cell-4">Cell 4</option>
            <option value="cell-5">Cell 5</option>
            <option value="cell-6">Cell 6</option>
            <option value="cell-7">Cell 7</option>
          </select>
        </div>
    )
}

export default SelectModel