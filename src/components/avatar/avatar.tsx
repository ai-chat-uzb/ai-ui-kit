import React from 'react';
import cx from 'classnames';

import Icon from 'components/icon/icon';

import cls from './avatar.module.scss';

export interface AvatarProps {
  url?: string;
  status?: 'active' | 'disturb' | 'away' | 'offline';
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ url, status, onClick }) => (
  <div onClick={onClick} className={cx(cls.wrapper, onClick && cls.click)}>
    <img src={url} alt="avatar not found" className={cls['avatar-image']} />
    {status && (
      <div className={cls['avatar-status']}>
        {
          // @ts-ignore
          status && <Icon name={status || 'offline'} size={32} />
        }
      </div>
    )}
  </div>
);

export default Avatar;
