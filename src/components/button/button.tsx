import React, { useRef } from 'react';
import { ButtonProps as BaseButtonProps } from 'antd/lib/button/button';
import cx from 'classnames';

import Icon, { ListProps } from 'components/icon/icon';

import cls from './button.module.scss';

export interface ButtonProps
  extends Pick<
    BaseButtonProps,
    'className' | 'loading' | 'disabled' | 'htmlType' | 'onClick'
  > {
  size: 'small' | 'medium' | 'large';
  colorView: 'full' | 'lighter' | 'very-light';
  view: 'green' | 'line' | 'tertiary' | 'outline' | 'glass';
  children?: string;
  iconName?: ListProps;
  iconSize?: number;
  iconPosition?: 'right' | 'left';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading = false,
  disabled = false,
  htmlType,
  onClick,
  size,
  view,
  colorView,
  iconName,
  iconSize,
  iconPosition = 'left'
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const btnHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pos = ref.current?.getBoundingClientRect();
    // @ts-ignore-start
    let x = e.clientX - pos?.left;
    // @ts-ignore-start
    let y = e.clientY - pos?.top;
    // @ts-ignore-end

    let span = document.createElement('span') as HTMLSpanElement;

    span.className = cls.ripples;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    ref.current?.appendChild(span);

    setTimeout(() => span.remove(), 1000);
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      type={htmlType}
      onClick={e => {
        btnHandler(e);
        if (onClick) onClick!(e);
      }}
      className={cx(
        cls.wrapper,
        className,
        cls[`${size}`],
        cls[`${view}`],
        cls[`${colorView}`],
        cls[`${iconPosition}`]
      )}
    >
      {loading ? (
        <div className={cls.wrap}>
          <div className={cls['dot-pulse']} />
        </div>
      ) : (
        <>
          {iconName && (
            <Icon size={iconSize} name={iconName || 'alertCircle'} />
          )}
          {children && <p className={cls.text}>{children}</p>}
        </>
      )}
    </button>
  );
};

export default Button;
