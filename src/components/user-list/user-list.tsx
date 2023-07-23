import React from 'react';

import Avatar, { AvatarProps } from 'components/avatar/avatar';
import Typography from 'components/typography/typography';

import cls from './user-list.module.scss';

export interface UserListProps extends Pick<AvatarProps, 'status' | 'url'> {
  rightElement: React.ReactNode;
  title?: string;
  username?: string;
}

const UserList: React.FC<UserListProps> = ({
  url,
  status,
  title,
  username,
  rightElement
}) => (
  <div className={cls.wrapper}>
    <div className={cls.left}>
      <Avatar url={url} status={status} />
      <div className={cls['text-wrap']}>
        <Typography
          children={title}
          lineHeight={24}
          size={16}
          weight={600}
          color="--color-white"
          tagName="h3"
        />
        <Typography
          children={username}
          tagName="h5"
          lineHeight={18}
          size={12}
          weight={500}
          margin="4px 0 0 0"
          color="--color-green-5"
        />
      </div>
    </div>
    <div className={cls.right}>{rightElement}</div>
  </div>
);

export default UserList;
