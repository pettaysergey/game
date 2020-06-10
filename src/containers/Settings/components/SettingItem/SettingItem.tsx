import React from "react";
import s from "./setting-item.module.scss";

export interface SettingItemProps {
  title: string;
  children: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, children }) => {
  return (
    <div className={s.container}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default SettingItem;
