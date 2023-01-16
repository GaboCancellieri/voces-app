import { ReactNode } from "react";

export interface WindowSizeProviderProps {
  children: ReactNode;
}

export interface IWindowSizeState {
  isMobile: boolean;
  isMobileOrTablet: boolean;
  isTablet: boolean;
  isDesktopOrTablet: boolean;
  isDesktop: boolean;
}
