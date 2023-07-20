// user-card.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import UserCard, { UserCardProps } from './user-card';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  argTypes: {
    title: {
      options: 'string'
    },
    subTitle: {
      options: 'string'
    },
    iconName: {
      options: 'string'
    },
    status: {
      options: ['online', 'offline', 'busy', 'sleep'],
      control: 'select'
    },
    avatarUrl: {
      options: 'string'
    },
    className: {
      options: 'string'
    }
  }
} as Meta<typeof UserCard>;

export const Story: StoryObj<typeof UserCard> = (
  props: JSX.IntrinsicAttributes & UserCardProps
) => <UserCard {...props} />;

Story.args = {
  title: 'Hello',
  subTitle: '12 members',
  iconName: 'settings',
  status: 'online',
  avatarUrl: '',
  className: 'className',
  onClick: () => {}
};
