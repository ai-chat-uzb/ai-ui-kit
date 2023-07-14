import React from 'react';

import classes from './hello.module.scss';

export interface HelloProps {
  children: React.ReactNode;
}

const Hello: React.FC<HelloProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Hello;
