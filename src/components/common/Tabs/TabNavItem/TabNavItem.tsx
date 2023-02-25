import Button from "ccomponents/Button";
import Typography from "ccomponents/Typography";
import React, { Dispatch, SetStateAction } from "react";

interface TabNavItemProps {
  id: number;
  title: string;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const TabNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
}: TabNavItemProps) => {
  return (
    <Button
      variant={id !== activeTab ? "secondary" : "primary"}
      onClick={() => setActiveTab(id)}
    >
      <Typography>{title}</Typography>
    </Button>
  );
};

export default TabNavItem;
