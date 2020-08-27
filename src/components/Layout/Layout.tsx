import React from 'react';
import Contain from '../../hoc/Contain';
import classes from './Layout.css';

interface Props {
  children: React.ReactNode
}

function Layout(props: Props) {
  return (
    <div>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>
          {props.children}
      </main>
    </div>
  );
  }

export default Contain(Layout);