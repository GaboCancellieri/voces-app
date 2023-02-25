import React, { ReactNode } from "react";
import styles from "../tabs.module.scss";

interface TabContentProps {
  children: ReactNode;
}

const TabContent = ({ children }: TabContentProps) => {
  return <div className={styles.contentContainer}>{children}</div>;
};

export default TabContent;
