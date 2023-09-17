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
  onClick?: () => void;
  className?: string;
  typeChat?: 'group' | 'personal';
  type?: 'group' | 'personal';
  history?: {
    text: string;
    photoUrl?: string;
    username?: string;
  };
  active?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  url,
  status,
  title,
  username,
  rightElement,
  size = 'large',
  onClick,
  className,
  history,
  typeChat = 'personal',
  type = 'personal',
  active
}) => {
  const sizeBoolean = size === 'small';

  return (
    <div
      className={cx(
        cls.wrapper,
        cls[size],
        onClick && cls.click,
        className,
        cls[`${className}`],
        history && cls.history,
        !rightElement && cls.gap,
        cls[`${type}`],
        active && cls.active
      )}
      onClick={onClick}
    >
      <div className={cls.left}>
        <Avatar url={url} size={size} status={status} name={title} />
        <div className={cls['text-wrap']}>
          <div className={cls['text-wrap-container']}>
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
              title={username}
              tagName="h5"
              lineHeight={sizeBoolean ? 14 : 18}
              size={sizeBoolean ? 12 : 10}
              weight={500}
              margin="4px 0 0 0"
              color="--color-green-5"
              className={cls.username}
            />
          </div>
          {history && (
            <div className={cls['history-wrapper']}>
              {typeChat === 'group' && (
                <div className={cls['history-row']}>
                  <Avatar
                    url={history?.photoUrl}
                    size="very-small"
                    status={status}
                    name={title}
                  />
                  <Typography
                    children={history?.username}
                    tagName="h6"
                    lineHeight={14}
                    size={11}
                    weight={400}
                    margin="2px 0 0 0"
                    color="--color-black-3"
                  />
                </div>
              )}
              <div
                className={cx(
                  cls['history-row'],
                  typeChat === 'personal' && cls['chat-personal']
                )}
              >
                <Typography
                  children={history?.text}
                  tagName="h6"
                  lineHeight={18}
                  size={14}
                  weight={500}
                  color="--color-black-3"
                  className={cls['last-text']}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={cls.right}>{rightElement}</div>
    </div>
  );
};

export default UserCard;
