import React, { Component } from 'react';
import Contain from '../../hoc/Contain';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Contain>
        <div>Burger</div>
        <div>Burger Controls</div>
      </Contain>
    );
  }
}