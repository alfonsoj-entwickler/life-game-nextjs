import { SelectSize, SelectModel } from "@/helpers/valuesSelects";

type Props = {
  name: string;
  id: string;
  title: string;
  value: string;
  handlerChange: (selectEvent: any) => void;
  options: SelectSize[] | SelectModel[];
};

const Select = ({ id, name, title, value, handlerChange, options }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start outline-none">
      <label className="text-base" htmlFor={id}>
        {title}
      </label>
      <select
        name={name}
        id={id}
        className="p-1 outline-none"
        value={value}
        onChange={(e) => handlerChange(e)}
      >
        {options.map((item) => (
          <option key={`${name}-${item.value}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
