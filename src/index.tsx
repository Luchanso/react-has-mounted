import * as React from "react";
import { Subtract } from "./types";


interface InjectedProps {
  hasMounted: boolean;
}

interface HocState {
  hasMounted: boolean;
}

export const withCheckMount = <WrappedProps extends InjectedProps>(
  Component: React.ComponentType<WrappedProps>
) =>
  class WithCheckMount extends React.Component<
    Subtract<WrappedProps, InjectedProps>,
    HocState
  > {
    state: HocState = {
      hasMounted: false
    };

    componentDidMount() {
      this.setState({
        hasMounted: true
      });
    }

    render() {
      const { ...restProps } = this.props as {};

      return <Component {...restProps} hasMounted={this.state.hasMounted} />;
    }
  };

export default {
  withCheckMount
};
