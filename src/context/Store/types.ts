import { Context, ReactNode, Reducer } from "react";

export interface ProviderProps {
  id?: string | null;
  stateContext: Context<any>;
  stateProviderValue?: any;
  reducer?: Reducer<any, any>;
  initialState: any;
  dispatchContext?: any;
  children: ReactNode;
}

export interface IReducerOptions {
  action: string;
  payload?: any;
}
