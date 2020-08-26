import React from 'react';
import Contain from '../../hoc/Contain';
import classes from './Layout.css';

export default props => (
  <Contain>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
  </Contain>
);