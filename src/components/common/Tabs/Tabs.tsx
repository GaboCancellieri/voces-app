import React, { useState } from "react";
import styles from "./tabs.module.scss";
import TabNavItem from "./TabNavItem/TabNavItem";
import TabContent from "./TabContent/TabContent";
import { TabsProps } from "./types";

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  if (tabs.length < 1) return <></>;

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => {
          return (
            <div key={index} className={styles.tabNavItemContainer}>
              <TabNavItem
                title={tab.tabTitle}
                id={index}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>
        <TabContent>{tabs[activeTab].tabContent}</TabContent>
      </div>
    </div>
  );
};

export default Tabs;
