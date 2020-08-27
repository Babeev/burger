import React, { Component } from 'react';
import classes from './BurgerIngredient.css';

interface Props {
  type: string;
}

class BurgerIngridient extends Component<Props> {
  render() {
    let ingridient = <div></div>;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingridient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingridient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingridient = <div className={classes.Meat}></div>
        break;
      case ('cheese'):
        ingridient = <div className={classes.Cheese}></div>
        break;
      case ('bacon'):
        ingridient = <div className={classes.Bacon}></div>
        break;
      case ('salad'):
        ingridient = <div className={classes.Salad}></div>
        break;
      default:
        ingridient = <div></div>;
    }
    return ingridient;
  } 
}

export default BurgerIngridient;