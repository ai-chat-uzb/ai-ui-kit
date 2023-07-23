import React from 'react';

import Avatar, { AvatarProps } from 'components/avatar/avatar';
import CopyBoard from 'components/copy-board/copy-board';
import Typography from 'components/typography/typography';

import cls from './user-content.module.scss';

export interface UserContentProps extends Pick<AvatarProps, 'status' | 'url'> {
  userName: string;
  description: string;
  date: string;
}

const UserContent: React.FC<UserContentProps> = ({
  userName,
  date,
  description,
  url,
  status
}) => (
  <div className={cls.wrapper}>
    <div className={cls['top-container']}>
      <Avatar url={url} status={status} />
      <div className={cls['text-container']}>
        <div className={cls['name-container']}>
          <Typography
            size={16}
            weight={600}
            lineHeight={24}
            spacing={0.15}
            children={userName}
            color="--color-white"
          />
          <Typography
            size={12}
            weight={500}
            lineHeight={18}
            spacing={0.15}
            children={date}
            color="--color-black-4"
          />
        </div>
        <CopyBoard text={description} />
      </div>
    </div>
    <div className={cls['description-container']}>
      <Typography
        size={16}
        weight={500}
        lineHeight={24}
        spacing={0.15}
        children={description}
        color="--color-black-3"
      />
    </div>
  </div>
);

export default UserContent;
