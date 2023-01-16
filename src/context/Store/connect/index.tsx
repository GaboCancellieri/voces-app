import React, {
  useContext,
  forwardRef as reactForwardRef,
  memo,
  ComponentType,
  Context,
  ComponentProps,
} from "react";
import isFunction from "lodash/isFunction";
import isArray from "lodash/isArray";
import defaultMergeProps from "../utils/defaultMergeProps";
import isValidContext from "../utils/isValidContext";
import bindActionCreator from "../utils/bindActionCreator";
import shallowEquals from "../utils/shallowEquals";
import useMemoComponent from "../hooks/useMemoComponent";
import { ConnectType } from "./types";

/**
 * This HOC connects a component to one or more context store(s) that have a dispatch and a state context
 * and passes in mapped values as props specified by the mapStateToProps, and mapDispatchToProps callback
 * The reducer dispatch API from the dispatchContext
 * The state returned from passing the stateContext into the mapStateToProps callback
 * The Components ownProps recieved from an HOC parent
 */

//@ts-ignore
const connect: ConnectType = ({
  mapStateToProps = [],
  mapDispatchToProps = {},
  pure = true,
  forwardRef = false,
  mergeProps = defaultMergeProps,
  areOwnPropsEqual = shallowEquals,
  areMergedPropsEqual = shallowEquals,
}) => {
  const wrapWithConnect = (WrappedComponent: ComponentType<any>) => {
    const wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";

    const displayName = `Connect(${wrappedComponentName})`;

    const ConnectFunction: React.FC<{ forwardedRef?: any }> = ({
      forwardedRef,
      ...ownProps
    }) => {
      const stateToProps: ComponentProps<any> = mapStateToProps.reduce(
        (acc, item) => {
          const { context, mapStateToProps: itemMapStateToProps } = item;
          const contextState = useContext(context);
          const props = isFunction(itemMapStateToProps)
            ? itemMapStateToProps(contextState, ownProps)
            : {};
          const newProps = { ...acc, ...props };
          return newProps;
        },
        {} as ComponentProps<any>
      );

      const dispatchToProps: ComponentProps<any> = isArray(mapDispatchToProps)
        ? mapDispatchToProps.reduce((acc, item) => {
            const { context, mapDispatchToProps: itemMapDispatchToProps } =
              item;
            if (isValidContext(context)) {
              const dispatch = useContext(context);
              Object.entries(itemMapDispatchToProps).forEach(([key, value]) => {
                acc[key] = bindActionCreator(dispatch)(value);
              });
            }
            return acc;
          }, {} as ComponentProps<any>)
        : Object.entries(mapDispatchToProps).reduce(
            (acc, [key, context]: [string, Context<any>]) => {
              if (isValidContext(context)) {
                const dispatch = useContext(context);
                acc[key] = dispatch;
              }
              return acc;
            },
            {} as ComponentProps<any>
          );

      const ConnectedComponent = useMemoComponent({
        Component: WrappedComponent,
        props: mergeProps(stateToProps, dispatchToProps, ownProps),
        ref: forwardedRef,
        isEqual: pure ? areMergedPropsEqual : undefined,
      });

      return ConnectedComponent;
    };

    const Connect = pure
      ? memo(ConnectFunction, areOwnPropsEqual)
      : ConnectFunction;

    // @ts-ignore
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const ForwaredComponent = reactForwardRef((props, ref) => (
        <Connect {...props} forwardedRef={ref} />
      ));

      ForwaredComponent.displayName = displayName;
      // @ts-ignore
      ForwaredComponent.WrappedComponent = WrappedComponent;
      return ForwaredComponent;
    }

    return Connect;
  };

  return wrapWithConnect;
};

export default connect;
