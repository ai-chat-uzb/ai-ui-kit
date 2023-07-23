// user-list.stories.tsx

import React from 'react';

import Dropdown from '../dropdown/dropdown';

import { StoryObj, Meta } from '@storybook/react';

import UserList, { UserListProps } from './user-list';
import { MenuProps } from 'antd';

export default {
  title: 'Components/UserList',
  component: UserList,
  argTypes: {}
} as Meta<typeof UserList>;

export const Story: StoryObj<typeof UserList> = (
  props: JSX.IntrinsicAttributes & UserListProps
) => <UserList {...props} />;

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
  status: '',
  title: 'Ryan Lee',
  username: '@ryanlee',
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
  )
};
