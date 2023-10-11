const SelectSize = () => {
    return(
        <div className="flex space-x-2 text-lg outline-none">
          <label htmlFor="size-cell">Choose a size:</label>
          <select name="size" id="size-cell" className="outline-none">
            <option value="60">60</option>
            <option value="50">50</option>
            <option value="40">40</option>
            <option value="30">30</option>
          </select>
        </div>
    )
}

export default SelectSize