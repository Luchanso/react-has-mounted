import React from 'react';

export const hasMounted = () => {
  return Component =>
    class extends React.Component {
      state = {
        hasMounted: false
      };

      componentDidMount() {
        this.setState({
          hasMounted: true
        });
      }

      render() {
        return <Component {...this.props} hasMounted={this.state.hasMounted} />;
      }
    };
};

export default {
  hasMounted
};
