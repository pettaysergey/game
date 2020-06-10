import React from "react";
import Button from "shared/Button";
import { NavLink } from "react-router-dom";
import { dataList } from "./helper";
import s from "./menu.module.scss";

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <ul>
      {dataList.map((el, i) => (
        <li key={i} className={s.listItem}>
          <NavLink to={el.path}>
            <Button text={el.name} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
