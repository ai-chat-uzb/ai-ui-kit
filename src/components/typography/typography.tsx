import React from 'react';
import cx from 'classnames';

import cls from './typography.module.scss';

export interface TypographyProps {
  children: React.ReactNode;
  size?: number;
  lineHeight?: number;
  weight?: number | string;
  spacing?: number;
  color?: string;
  padding?: string | number;
  margin?: string | number;
  tagName?: 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  textAlign?: 'center' | 'start' | 'end';
  linearGradients?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size = 14,
  lineHeight = 20,
  weight = 400,
  spacing = 0.5,
  color = '--color-black-9',
  padding = 0,
  margin = 0,
  tagName = 'p',
  textAlign = 'start',
  linearGradients
}) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return (
    <Tag
      style={{
        fontSize: size,
        lineHeight: `${lineHeight}px`,
        fontWeight: weight,
        letterSpacing: spacing,
        color: `var(${!linearGradients && color})`,
        padding: padding,
        margin: margin,
        textAlign: textAlign,
        background: `var(${linearGradients && color})`
      }}
      className={cx(cls.wrapper, linearGradients && cls['linear-gradient'])}
    >
      {children}
    </Tag>
  );
};

export default Typography;
