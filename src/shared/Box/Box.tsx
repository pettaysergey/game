import React from "react";
import styles from "./box.module.scss";

export interface BoxProps {
  children: React.ReactNode;
  title: string;
}

const Box: React.FC<BoxProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default Box;
