import React from 'react';
import { COLOR_VARIABLE } from 'helpers/constants';

import cls from './color.module.scss';

export interface ColorProps {
  children: React.ReactNode;
}

const Color: React.FC<ColorProps> = ({ children }) => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      {COLOR_VARIABLE.map(item => (
        <div
          key={item}
          className={cls.card}
          style={{ background: `var(${item})` }}
        >
          {item}:&nbsp;
          {getComputedStyle(document.documentElement).getPropertyValue(item)}
        </div>
      ))}
    </div>
    {/* <div className={cls.container_linear}>
      {COLOR_VARIABLE.map(item => (
        <div className={cls.card} style={{ background: `var(${item})` }}>
          {item}:&nbsp;
          {getComputedStyle(document.documentElement).getPropertyValue(item)}
        </div>
      ))}
    </div> */}
  </div>
);

export default Color;
