import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Лист салата', type: 'salad'},
  {label: 'Бекон', type: 'bacon'},
  {label: 'Сыр', type: 'cheese'},
  {label: 'Мясо', type: 'meat'}
]

export default props => {
  const isDisableOrder = Object.values(props.isDisable).every(vis => vis === 0);
  return (
  <div className={classes.BuildControls}>
    <p>Этот бургер обойдется в <strong>{props.price.toFixed(2)}</strong> рублей</p>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} 
        label={ctrl.label}
        type={ctrl.type}
        toggle={props.ingridientToggle}
        isDisable={props.isDisable[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={isDisableOrder}>Купить</button>
  </div>
); }