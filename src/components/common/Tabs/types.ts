import { ReactNode } from "react";

export interface ITab {
  tabTitle: string;
  tabContent: ReactNode;
}

export interface TabsProps {
  tabs: ITab[];
}
