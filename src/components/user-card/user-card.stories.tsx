// user-card.stories.tsx

import React from 'react';

import Dropdown from '../dropdown/dropdown';

import { StoryObj, Meta } from '@storybook/react';

import UserCard, { UserCardProps } from './user-card';
import { MenuProps } from 'antd';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  argTypes: {}
} as Meta<typeof UserCard>;

export const Story: StoryObj<typeof UserCard> = (
  props: JSX.IntrinsicAttributes & UserCardProps
) => <UserCard {...props} />;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    )
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    )
  }
];

Story.args = {
  url: 'https://firebasestorage.googleapis.com/v0/b/ai-chat-c50cc.appspot.com/o/Person%3DEmily%20Liu.svg?alt=media&token=e20ad0ee-e6bb-4ae6-aee4-4b44e26084a7',
  status: 'off',
  title: 'Ryan Lee',
  username: '@ryanlee',
  className: '',
  rightElement: (
    <>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        placement={'bottomLeft'}
        iconName="settings"
        iconSize={24}
      />
    </>
  ),
  size: 'large'
};
