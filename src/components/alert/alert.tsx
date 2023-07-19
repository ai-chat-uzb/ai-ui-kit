import React from 'react';
import { AlertProps as BaseAlertProps } from 'antd/lib/alert/Alert';
import cx from 'classnames';

import Icon, { ListProps } from 'components/icon/icon';

import cls from './alert.module.scss';

export interface AlertProps
  extends Pick<BaseAlertProps, 'className' | 'onClick'> {
  type: 'success' | 'info' | 'warning' | 'error';
  iconName?: ListProps;
  closeIcon?: ListProps;
  iconSize?: number;
  title?: string;
  alertSubTitle;
  subTitle: string;
}

const Alert: React.FC<AlertProps> = ({
  onClick,
  type,
  title,
  alertSubTitle,
  subTitle,
  iconName,
  iconSize,
  className
}) => (
  <div
    className={cx(
      cls.wrapper,
      !title && cls['small-wrap'],
      className && className
    )}
  >
    <div className={cls[`${type}`]}>
      <Icon size={iconSize || 24} name={iconName || 'bulb'} />
    </div>
    <div>
      {title && (
        <div className={cls.head}>
          <p className={cls.title}>{title || 'Title'}</p>
          <div onClick={onClick} className={cls['close-icon']}>
            <Icon size={22} name={'crossCircle'} />
          </div>
        </div>
      )}
      <p className={cx(cls['sub-title'], !title && cls['small-size'])}>
        <span className={cls[`${type}`]}>{alertSubTitle}</span> {subTitle}
      </p>
    </div>
  </div>
);

export default Alert;
