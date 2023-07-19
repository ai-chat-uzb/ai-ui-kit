import React, { useState } from 'react';
import { InputProps as BaseInputProps } from 'antd/lib/input';
import cx from 'classnames';
import { Control, Controller } from 'react-hook-form';

import Icons from 'components/icon/icon';

import cls from './password.module.scss';

export interface PasswordProps
  extends Pick<
    BaseInputProps,
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

const Password: React.FC<PasswordProps> = ({
  control,
  name,
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
}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className={cx(cls.wrapper, className && className)} style={{ width }}>
      {label && (
        <label htmlFor={name} className={cls['container-label']}>
          {label}
        </label>
      )}
      <div className={cx(cls.container, errorMsg && cls.error)}>
        <div className={cls.icons}>
          <Icons size={24} name="padlock" />
        </div>
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
              type={hide ? 'text' : 'password'}
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
          className={cx(cls['input-state'])}
        />
        <div className={cls.hide} onClick={() => setHide(!hide)}>
          <Icons size={24} name={hide ? 'eyeCross' : 'hide'} />
        </div>
      </div>
      {errorMsg && (
        <div className={cls.message}>
          <Icons size={16} name="alertCircle" /> {errorMsg}
        </div>
      )}
    </div>
  );
};

export default Password;
