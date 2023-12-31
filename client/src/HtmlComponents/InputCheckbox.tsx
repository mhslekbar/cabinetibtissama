interface InputCheckboxInterface {
  name: string;
  id?: string;
  value: any;
  setValue: (value: any) => void;
}

export const InputCheckbox: React.FC<InputCheckboxInterface> = ({
  name,
  id,
  value,
  setValue,
}) => {
  return (
    <div className="mt-2">
      <input
        type="checkbox"
        id={id}
        className={`shadow rounded border px-3 py-2 text-gray-700 focus:outline-none`}
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
      />{" "}
      <label htmlFor={id} className={`text-gray-700 font-bold w-fit`}>
        {name}
      </label>
    </div>
  );
};