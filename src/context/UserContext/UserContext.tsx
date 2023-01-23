import React, { createContext } from "react";
import Provider from "../Store";
import { userReducer, userInitialState } from "./reducer";
import { UserProviderProps } from "./types";

const UserStateContext = createContext(userInitialState);
UserStateContext.displayName = "UserStateContext";

const UserDispatchContext = createContext(undefined);
UserDispatchContext.displayName = "UserDispatchContext";

const UserProvider = ({ children }: UserProviderProps) => (
  <Provider
    stateContext={UserStateContext}
    dispatchContext={UserDispatchContext}
    reducer={userReducer}
    initialState={userInitialState}
  >
    {children}
  </Provider>
);

export { UserStateContext, UserDispatchContext, UserProvider };
