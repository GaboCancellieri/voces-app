import React from "react";
import { UserProvider } from "../UserContext/UserContext";
import { WindowSizeProvider } from "../WindowSizeProvider/WindowSizeProvider";
import { GlobalStateProviderProps } from "./types";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return (
    <WindowSizeProvider>
      <UserProvider>{children}</UserProvider>
    </WindowSizeProvider>
  );
};

export default GlobalStateProvider;
