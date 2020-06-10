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

export interface SelectProps {
  options: { value: string | number; label: string }[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <ReactSelect
      styles={styleForSelect}
      options={options}
      className={s.combobox}
      classNamePrefix="combobox"
    />
  );
};

export default Select;
