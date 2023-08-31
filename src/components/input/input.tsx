import React from 'react';
import { InputProps as BaseInputProps } from 'antd/lib/input';
import cx from 'classnames';
import { Control, Controller } from 'react-hook-form';

import Icons, { ListProps } from 'components/icon/icon';

import cls from './input.module.scss';

export interface InputProps
  extends Pick<
    BaseInputProps,
    | 'type'
    | 'disabled'
    | 'placeholder'
    | 'maxLength'
    | 'min'
    | 'pattern'
    | 'step'
    | 'className'
  > {
  control: Control<any>;
  name: string;
  label?: string;
  width?: string;
  height?: number;
  errorMsg?: string;
  iconName?: ListProps;
  chat?: boolean;
}

const Input: React.FC<InputProps> = ({
  control,
  name,
  type,
  disabled,
  width,
  className,
  height = 48,
  placeholder,
  label,
  errorMsg,
  maxLength,
  min,
  iconName,
  chat = false,
  ...args
}) => (
  <div className={cx(cls.wrapper, className && className)} style={{ width }}>
    {label && (
      <label htmlFor={name} className={cls['container-label']}>
        {label}
      </label>
    )}
    <div
      className={cx(
        cls.container,
        iconName && cls['icon-name'],
        errorMsg && cls.error,
        !label && cls['not-label']
      )}
    >
      {iconName && (
        <div className={cls.icons}>
          <Icons size={24} name={iconName} />
        </div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            className={cx(
              cls['container-input'],
              className && `${className}-input`,
              chat && cls.chat
            )}
            type={type}
            disabled={disabled}
            style={{ height }}
            autoComplete="off"
            id={name}
            placeholder={placeholder}
            maxLength={maxLength}
            min={min}
            {...args}
          />
        )}
      />
      <div style={{ height: height + 2 }} className={cx(cls['input-state'])} />
    </div>
    {errorMsg && (
      <div className={cls.message}>
        <Icons size={16} name="alertCircle" /> {errorMsg}
      </div>
    )}
  </div>
);

export default Input;
