import React from "react";
import ReactSelect from "react-select";
import s from "./select.module.scss";

const styleForSelect = {
  control: (base: any) => ({
    ...base,
    border: 0,
    boxShadow: 0,
  }),
};

type Value = {
  value: string | number;
  label: string;
};

export interface SelectProps {
  value: string;
  options: Value[];
  onChange: (value: Value) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const getValue = () => options.find((el) => el.value === value);
  const onChangeHandler = (value: Value) => {
    console.log(value);
  };
  return (
    <ReactSelect
      styles={styleForSelect}
      options={options}
      className={s.combobox}
      classNamePrefix="combobox"
      value={getValue()}
      // @ts-ignore
      onChange={(option: Value) => onChange(option.value)}
    />
  );
};

export default Select;
