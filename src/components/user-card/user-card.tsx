import React from 'react';
import cx from 'classnames';

import Avatar, { AvatarProps } from 'components/avatar/avatar';
import Typography from 'components/typography/typography';

import cls from './user-card.module.scss';

export interface UserCardProps
  extends Pick<AvatarProps, 'status' | 'url' | 'size'> {
  rightElement?: React.ReactNode;
  title: string;
  username: string;
}

const UserCard: React.FC<UserCardProps> = ({
  url,
  status,
  title,
  username,
  rightElement,
  size = 'large'
}) => {
  const sizeBoolean = size === 'small';

  return (
    <div className={cx(cls.wrapper, cls[size])}>
      <div className={cls.left}>
        <Avatar url={url} size={size} status={status} name={title} />
        <div className={cls['text-wrap']}>
          <Typography
            children={title}
            lineHeight={sizeBoolean ? 18 : 24}
            size={sizeBoolean ? 14 : 16}
            weight={600}
            color="--color-white"
            tagName="h3"
          />
          <Typography
            children={username}
            tagName="h5"
            lineHeight={sizeBoolean ? 14 : 18}
            size={sizeBoolean ? 12 : 10}
            weight={500}
            margin="4px 0 0 0"
            color="--color-green-5"
          />
        </div>
      </div>
      <div className={cls.right}>{rightElement}</div>
    </div>
  );
};

export default UserCard;
