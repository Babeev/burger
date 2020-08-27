import React from 'react';
import Contain from '../../../hoc/Contain';

interface Props {
  ingridients: object;
}

function OrderSummary(props: Props) {
  const list = Object.keys(props.ingridients).map(li => {
    let name = '';
    switch(li) {
      case 'salad':
        name = 'Листья салата';
        break;
      case 'cheese':
        name = 'Сыр';
        break;
      case 'meat':
        name = 'Мясо';
        break;
      case 'bacon':
        name = 'Бекон';
        break;
      default:
        name = '';
    }
    return (
    <li key={name + 1}><span>{name}: </span>{props.ingridients[li]}</li>
  )});
  return (
    <div>
      <h3>Ваш заказ</h3>
      <p>Вы заказали бургер с ингридиентами:</p>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default Contain(OrderSummary);