import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import cx from 'classnames';

import Typography from 'components/typography/typography';

import Avatar from '../avatar/avatar';
import Icons from '../icon/index';

import cls from './user-card.module.scss';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0'
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '3rd menu item',
    key: '3'
  }
];

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
          <Dropdown
            overlayClassName="dropdown-wrap"
            menu={{ items }}
            trigger={['click']}
          >
            <a onClick={e => e.preventDefault()}>
              <Space>
                <Icons name="settings" size={24} />
              </Space>
            </a>
          </Dropdown>
        </div>
      )}
    </div>
  </div>
);

export default UserCard;
