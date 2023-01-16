import React, { useReducer } from "react";
import { ProviderProps } from "./types";

const Provider = ({
  id,
  stateContext: StateContext,
  stateProviderValue,
  reducer,
  // @ts-ignore
  initialState = stateProviderValue ?? StateContext?._currentValue,
  dispatchContext: DispatchContext,
  children,
}: ProviderProps) => {
  if (!reducer) {
    return (
      <StateContext.Provider value={stateProviderValue ?? initialState}>
        {children}
      </StateContext.Provider>
    );
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const StateContextProvider = (
    <StateContext.Provider value={stateProviderValue ?? state}>
      {children}
    </StateContext.Provider>
  );

  return DispatchContext ? (
    <DispatchContext.Provider
      value={dispatch}
      displayName={DispatchContext.displayName}
    >
      {StateContextProvider}
    </DispatchContext.Provider>
  ) : (
    StateContextProvider
  );
};

export default Provider;
