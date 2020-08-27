import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

interface Props {
  ingridients: object;
}

export default (props: Props) => {
  const emptyIngridients = <p>Пожалуйста, добавьте ингридиенты</p>;
  let transformIngridients:any = [];
  
  Object.keys(props.ingridients).forEach(ing => {
    let numberIngridients = props.ingridients[ing];
    for(let i = 0; i < numberIngridients; i++) {
      transformIngridients.push(<BurgerIngridient key={ing + i} type={ing} />);
    }
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top"/>
      {transformIngridients.length ? transformIngridients : emptyIngridients}
      <BurgerIngridient type="bread-bottom"/>
    </div>
  );
}