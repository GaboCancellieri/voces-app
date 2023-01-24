import React from "react";
import { AlertProvider } from "../AlertContext/AlertContext";
import { UserProvider } from "../UserContext/UserContext";
import { WindowSizeProvider } from "../WindowSizeProvider/WindowSizeProvider";
import { GlobalStateProviderProps } from "./types";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return (
    <WindowSizeProvider>
      <UserProvider>
        <AlertProvider>{children}</AlertProvider>
      </UserProvider>
    </WindowSizeProvider>
  );
};

export default GlobalStateProvider;
