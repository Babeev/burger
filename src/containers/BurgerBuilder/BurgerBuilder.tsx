import React, {Component} from 'react';
import Contain from '../../hoc/Contain';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
  salad: 30,
  cheese: 40,
  meat: 100,
  bacon: 70,
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 290
  }

  toggleIngridientHandler = (type, toggle) => {
    const updatedIngridients = {
      ...this.state.ingridients
    };
    const oldCount = this.state.ingridients[type];
    const oldPrice = this.state.totalPrice;
    const priceIngridient = INGRIDIENT_PRICES[type];
    let newPrice = 0;
    let updatedCount = 0;

    switch (toggle) {
      case 'more':
        newPrice = oldPrice + priceIngridient;
        updatedCount = oldCount + 1;
        break;
      case 'less':
        newPrice = oldPrice - priceIngridient;
        updatedCount = oldCount - 1;
        break;
      default:
        console.log('Что-то пошло не так');
    }

    if (0 > updatedCount) {
      return;
    }

    updatedIngridients[type] = updatedCount;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
  }

  render() {
    return (
      <div>
        <Modal>
          <OrderSummary ingridients={this.state.ingridients}/>
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls ingridientToggle={this.toggleIngridientHandler} 
          isDisable={this.state.ingridients} 
          price={this.state.totalPrice} />
      </div>
    );
  }
}

export default Contain(BurgerBuilder);