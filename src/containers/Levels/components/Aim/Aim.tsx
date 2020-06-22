import React from "react";
import s from "./aim.module.scss";

export interface AimProps {}

const Aim: React.FC<AimProps> = () => {
  const [coord, setCoord] = React.useState<number[]>([]);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      setCoord([clientX, clientY]);
    });
  }, []);

  return (
    <div className={s.aim} style={{ top: coord[1], left: coord[0] }}></div>
  );
};

export default Aim;
