import React from 'react';

import classes from './hi.module.scss';

export interface HiProps {
  children: React.ReactNode;
}

const Hi: React.FC<HiProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Hi;
