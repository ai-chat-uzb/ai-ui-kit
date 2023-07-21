import React from 'react';
import cx from 'classnames';

import cls from './avatar.module.scss';

const avatar: string = require('../../assets/images/icons/avatar.svg').default;

export interface AvatarProps {
  avatarUrl?: string;
  status?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ status, className, avatarUrl }) => (
  <div className={cx(cls.wrapper, className && className)}>
    <img className={cls.user} src={avatarUrl || avatar} alt="" />
    {status && (
      <div className={cls.status}>
        <div className={cx(cls.shape, cls[`${status}`])}></div>
      </div>
    )}
  </div>
);

export default Avatar;
