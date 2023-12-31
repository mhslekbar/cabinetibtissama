import React from "react";

interface InputRadioInterface {
  name: string;
  id?: string;
  value: any;
  setValue: (value: any) => void;
  labelName?: string,
  checked: boolean
}

export const InputRadio: React.FC<InputRadioInterface> = ({
  name,
  id,
  value,
  setValue,
  labelName,
  checked
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <label htmlFor={id} className={`text-gray-700 font-bold w-fit`}>
        {labelName}
      </label>
    </div>
  );
};