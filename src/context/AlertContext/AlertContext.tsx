import React, { createContext } from "react";
import Provider from "../Store";
import { alertReducer, alertInitialState } from "./reducer";
import { AlertProviderProps } from "./types";

const AlertStateContext = createContext(alertInitialState);
AlertStateContext.displayName = "AlertStateContext";

const AlertDispatchContext = createContext(undefined);
AlertDispatchContext.displayName = "AlertDispatchContext";

const AlertProvider = ({ children }: AlertProviderProps) => (
  <Provider
    stateContext={AlertStateContext}
    dispatchContext={AlertDispatchContext}
    reducer={alertReducer}
    initialState={alertInitialState}
  >
    {children}
  </Provider>
);

export { AlertStateContext, AlertDispatchContext, AlertProvider };
