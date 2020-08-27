import React, {Component} from 'react';
import Contain from '../../hoc/Contain';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
      <div>
        <Burger ingridients={this.state.ingridients} />
        <div>Burger Controls</div>
      </div>
    );
  }
}

export default Contain(BurgerBuilder);