import React from "react";
import styles from "./page.module.scss";

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

export default Page;
