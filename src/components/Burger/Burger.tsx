import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

export default props => {
  const transformIngridients = Object.keys(props.ingridients)
  .map(igKey => {
    return [...Array(props.ingridients[igKey])]
    .map((_, i) => <BurgerIngridient key={igKey + i} type={igKey} />)
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top"/>
      {transformIngridients}
      <BurgerIngridient type="bread-bottom"/>
    </div>
  );
}