import React, { createContext } from "react";
import Provider from "../Store";
import { windowSizeInitialState, windowSizeReducer } from "./reducer";
import { WindowSizeProviderProps } from "./types";

const WindowSizeStateContext = createContext(windowSizeInitialState);
WindowSizeStateContext.displayName = "WindowSizeStateContext";

const WindowSizeDispatchContext = createContext(undefined);
WindowSizeDispatchContext.displayName = "WindowSizeDispatchContext";

const WindowSizeProvider = ({ children }: WindowSizeProviderProps) => {
  return (
    <Provider
      stateContext={WindowSizeStateContext}
      initialState={windowSizeInitialState}
      dispatchContext={WindowSizeDispatchContext}
      reducer={windowSizeReducer}
    >
      {children}
    </Provider>
  );
};

export {
  WindowSizeStateContext,
  WindowSizeDispatchContext,
  WindowSizeProvider,
};
