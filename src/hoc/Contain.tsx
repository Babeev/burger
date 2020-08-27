import React from 'react';

export default (Component: Function) => {
  return class extends React.Component {
    render() {
      return <Component {...this.props} />
    }
  }
}