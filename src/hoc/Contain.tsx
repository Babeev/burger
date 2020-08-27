import React from 'react';

export default (Component: Function) => {
  return class extends React.Component<any> {
    render() {
      return <Component {...this.props} />
    }
  }
}