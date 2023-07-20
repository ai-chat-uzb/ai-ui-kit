import React from 'react';
import cx from 'classnames';

import Typography from 'components/typography/typography';

import Avatar from '../avatar/avatar';
import Icons from '../icon/index';

import cls from './user-card.module.scss';

export interface UserCardProps {
  title: string;
  subTitle: string;
  iconName?: string;
  status?: string;
  avatarUrl: string;
  className?: string;
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  title,
  subTitle,
  iconName,
  status,
  avatarUrl,
  onClick,
  className
}) => (
  <div className={cx(cls.wrapper, className && className)}>
    <div className={cls.selected} onClick={onClick}>
      <Avatar status={status} avatarUrl={avatarUrl} />
      <div className={cls.info}>
        <Typography size={16} color="--color-white" weight={600} spacing={0.15}>
          {title || 'Not found'}
        </Typography>
        <Typography
          size={12}
          color="--color-green-5"
          weight={500}
          spacing={0.15}
          lineHeight={18}
        >
          {subTitle || 'Not found'}
        </Typography>
      </div>
      {iconName && (
        <div className={cls['arrow-icon']}>
          <Icons name="settings" size={24} />
        </div>
      )}
    </div>
  </div>
);

export default UserCard;
