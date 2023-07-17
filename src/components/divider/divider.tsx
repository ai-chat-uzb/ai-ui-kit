import React from 'react';
import cx from 'classnames';

import cls from './divider.module.scss';

export interface DividerProps {
  className?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  padding?: string | number;
  margin?: string | number;
}

const Divider: React.FC<DividerProps> = ({
  className,
  backgroundColor = '--color-black-1',
  width = '100%',
  height = '100%',
  padding = 0,
  margin = 0
}) => (
  <div
    className={cx(cls.wrapper, className && className)}
    style={{
      background: `var(${backgroundColor})`,
      width: width,
      height: height,
      padding: padding,
      margin: margin
    }}
  ></div>
);

export default Divider;
