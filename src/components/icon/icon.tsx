import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';

import * as List from './list';

import classes from './icon.module.scss';

export type ListProps = keyof typeof List;

export interface IIconProps {
  name: ListProps;
  size?: number;
  className?: string;
  color?: string;
  onClick?: () => void;
  cy?: string;
}

const Icon: React.FC<IIconProps> = ({
  cy,
  name,
  size = 15,
  className,
  color,
  onClick
}) => {
  const Component = get(List, `[${name}]`);

  if (!Component) {
    console.log('Icon component not found');

    return null;
  }

  return (
    <span
      className={cx(classes.wrapper, className)}
      onClick={onClick}
      style={
        {
          ...{ '--size': `${size}px` },
          color: `var(${color})`
        } as React.CSSProperties
      }
      data-cy={cy}
    >
      {
        // @ts-ignore
        <Component />
      }
    </span>
  );
};

export default Icon;
