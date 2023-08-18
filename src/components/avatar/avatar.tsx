import React from 'react';
import cx from 'classnames';

import Icon from 'components/icon/icon';

import cls from './avatar.module.scss';

export interface AvatarProps {
  url?: string;
  status?: 'active' | 'disturb' | 'away' | 'offline' | 'off';
  onClick?: () => void;
  size?: 'small' | 'large';
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  url,
  status,
  onClick,
  size = 'large',
  name
}) => {
  const handleName = (value: string) => {
    const name = value.split(' ');

    return name.length === 2
      ? name
          .reduce(
            (oldValue, newValue) => oldValue.slice(0, 1) + newValue.slice(0, 1),
            ''
          )
          .toLocaleUpperCase()
      : String(value.slice(0, 2)).toLocaleUpperCase();
  };

  return (
    <div
      onClick={onClick}
      className={cx(
        cls.wrapper,
        onClick && cls.click,
        cls[`${size}`],
        !url && name && cls['active-name']
      )}
    >
      {url && (
        <img src={url} alt="avatar not found" className={cls['avatar-image']} />
      )}
      {!url && name && handleName(name)}
      {!(status === 'off') && (
        <div className={cls['avatar-status']}>
          {
            // @ts-ignore
            status && <Icon name={status || 'offline'} size={16} />
          }
        </div>
      )}
    </div>
  );
};

export default Avatar;
