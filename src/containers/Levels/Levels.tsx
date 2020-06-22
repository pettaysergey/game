import React from "react";
import Aim from "./components/Aim";
import s from "./levels.module.scss";

const goblin = require("../../assets/img/bg/goblin.png");

export interface LevelsProps {}

const Levels: React.FC<LevelsProps> = () => {
  return (
    <div className={s.container}>
      <Aim />
    </div>
  );
};

export default Levels;
