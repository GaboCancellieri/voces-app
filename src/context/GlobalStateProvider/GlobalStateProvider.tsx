import React from "react";
import { WindowSizeProvider } from "../WindowSizeProvider/WindowSizeProvider";
import { GlobalStateProviderProps } from "./types";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return <WindowSizeProvider>{children}</WindowSizeProvider>;
};

export default GlobalStateProvider;
