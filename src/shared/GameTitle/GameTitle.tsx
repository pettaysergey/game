import React from "react";
import s from "./gameTitle.module.scss";

export interface GameTitleProps {}

const GameTitle: React.FC<GameTitleProps> = () => {
  return <h1 className={s.title}>Predator</h1>;
};

export default GameTitle;
