import React from 'react';
import cx from 'classnames';

import Avatar, { AvatarProps } from 'components/avatar/avatar';
import CopyBoard from 'components/copy-board/copy-board';
import Typography from 'components/typography/typography';

import cls from './user-content.module.scss';

export interface UserContentProps extends Pick<AvatarProps, 'status' | 'url'> {
  userName: string;
  description: string;
  date: string;
  author: boolean;
  chat: 'private' | 'group';
  consecutively?: boolean;
}

const UserContent: React.FC<UserContentProps> = ({
  userName,
  date,
  description,
  url,
  status,
  author,
  chat,
  consecutively
}) => (
  <div
    className={cx(
      cls.wrapper,
      author && cls.author,
      chat === 'private' && cls.private,
      consecutively && cls.consecutively
    )}
  >
    <div className={cls['position-container']}>
      <div className={cls['top-container']}>
        {chat === 'group'
          ? !author && !consecutively && <Avatar url={url} status={status} />
          : ''}
        <div className={cls['text-container']}>
          <div className={cls['name-container']}>
            {chat === 'group'
              ? !author &&
                !consecutively && (
                  <Typography
                    size={16}
                    weight={600}
                    lineHeight={24}
                    spacing={0.15}
                    children={userName}
                    color="--color-green-5"
                  />
                )
              : ''}
            <Typography
              size={12}
              weight={500}
              lineHeight={18}
              spacing={0.15}
              children={date}
              color="--color-white"
            />
          </div>
          <CopyBoard text={description} iconColor="--color-white" />
        </div>
      </div>
      <div className={cls['description-container']}>
        <Typography
          size={16}
          weight={500}
          lineHeight={24}
          spacing={0.15}
          children={description}
          color="--color-white"
        />
      </div>
    </div>
  </div>
);

export default UserContent;
