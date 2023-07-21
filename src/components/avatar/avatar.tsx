import React from 'react';
import cx from 'classnames';

import avatar from 'assets/images/icons/avatar.svg';

import cls from './avatar.module.scss';

export interface AvatarProps {
  avatarUrl?: string;
  status?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ status, className, avatarUrl }) => (
  <div className={cx(cls.wrapper, className && className)}>
    <img className={cls.user} src={avatarUrl || avatar} alt="img not found" />
    {status && (
      <div className={cls.status}>
        <div className={cx(cls.shape, cls[`${status}`])}></div>
      </div>
    )}
  </div>
);

export default Avatar;
