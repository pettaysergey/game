import React from "react";
import cx from "classnames";

import s from "./toggle.module.scss";

export interface ToggleProps {
  onChange: (value: boolean) => void;
  isActive: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ onChange, isActive }) => {
  return (
    <div
      className={cx(s.toggleContainer, { [s.active]: isActive })}
      onClick={() => onChange(!isActive)}
    >
      <div className={s.toggleHandler}></div>
    </div>
  );
};

export default Toggle;
