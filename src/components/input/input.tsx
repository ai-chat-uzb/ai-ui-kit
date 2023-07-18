import React from 'react';
import { InputProps as BaseInputProps } from 'antd/lib/input';
import cx from 'classnames';
import { Control, Controller } from 'react-hook-form';

import Icons from 'components/icon/icon';

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
  ...args
}) => (
  <div className={cx(cls.wrapper, className && className)} style={{ width }}>
    {label && (
      <label htmlFor={name} className={cls['container-label']}>
        {label}
      </label>
    )}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          className={cx(
            cls['container-input'],
            className && `${className}-input`
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
    <div
      style={{ height: height + 2 }}
      className={cx(cls['input-state'], errorMsg && cls.error)}
    />
    {errorMsg && (
      <div className={cls.message}>
        <Icons size={16} name="alertCircle" /> {errorMsg}
      </div>
    )}
  </div>
);

export default Input;
