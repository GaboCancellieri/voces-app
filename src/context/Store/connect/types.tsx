import { Context, ComponentType } from "react";

export type ComponentPropsType = Record<string, any>;

export type MapStateToPropsCallback<S, P> = (
  state: S,
  ownProps: P
) => (Partial<S> | P) | (Partial<S> & P);

export interface MapStateToProps<ProviderValue, OwnProps> {
  context: Context<ProviderValue>;
  mapStateToProps: MapStateToPropsCallback<ProviderValue, OwnProps>;
}

export interface MapDispatchToPropsArrayItem<S> {
  context: Context<S>;
  mapDispatchToProps: Record<string, (...args: any[]) => any>;
}

export type MapDispatchToPropsObject<S> = Record<string, Context<S>>;

export type MergePropsType = (
  stateToProps: ComponentPropsType,
  dispatchToProps: ComponentPropsType,
  ownProps: ComponentPropsType
) => ComponentPropsType;

export type EqualityFunctionType = (
  prevPropsOrState: ComponentPropsType,
  nextPropsOrState: ComponentPropsType
) => boolean;

export interface ConnectOptions {
  mapStateToProps?: MapStateToProps<any, any>[];
  mapDispatchToProps?:
    | MapDispatchToPropsArrayItem<any>[]
    | MapDispatchToPropsObject<any>;
  pure?: boolean;
  forwardRef?: boolean;
  mergeProps?: MergePropsType;
  areOwnPropsEqual?: EqualityFunctionType;
  areMergedPropsEqual?: EqualityFunctionType;
}

export type ConnectType = (
  options: ConnectOptions
) => (Component: ComponentType<any>) => (ownProps: any) => any;
