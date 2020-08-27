import React from 'react';
import classes from './BuildControl.css';

export default props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} 
      onClick={() => props.toggle(props.type, 'less')}
      disabled={props.isDisable === 0}>Меньше</button>
    <button className={classes.More} 
      onClick={() => props.toggle(props.type, 'more')}>Больше</button>
  </div>
);