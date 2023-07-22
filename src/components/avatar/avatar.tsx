import React from 'react';

import { Icons } from 'components';

import cls from './avatar.module.scss';

export interface AvatarProps {
  url?: string;
  status?: 'active' | 'disturb' | 'away' | 'offline';
}

const Avatar: React.FC<AvatarProps> = ({ url, status }) => (
  <div className={cls.wrapper}>
    <img src={url} alt="avatar not found" className={cls['avatar-image']} />
    {status && (
      <div className={cls['avatar-status']}>
        {
          // @ts-ignore
          <Icons name={status || 'active'} size={32} />
        }
      </div>
    )}
  </div>
);

export default Avatar;
