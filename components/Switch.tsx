type Props = {
  text: string;
  color?: string;
  statusChecked: boolean;
  handlerChange: () => void;
};

const Switch = ({ text, color="blue", statusChecked, handlerChange }: Props) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        aria-label="Switch"
        checked={statusChecked}
        onChange={(e) => handlerChange()}
      />
      <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-${color}-300 dark:peer-focus:ring-${color}-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-${color}-600`} ></div>
      <span className="ml-3 text-sm font-medium text-gray-900">{text}</span>
    </label>
  );
};

export default Switch;