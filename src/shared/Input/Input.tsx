import React from "react";

export interface InputProps {
  name: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, onChange, label, value }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
