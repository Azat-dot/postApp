import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, handler, style }) => {
  return (
    <button style={style} onClick={handler} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
