// avatar.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Avatar, { AvatarProps } from './avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    avatarUrl: {
      options: 'string'
    },
    status: {
      options: ['online', 'offline', 'busy', 'sleep'],
      control: { type: 'select' }
    },
    className: {
      options: 'string'
    }
  }
} as Meta<typeof Avatar>;

export const Story: StoryObj<typeof Avatar> = (
  props: JSX.IntrinsicAttributes & AvatarProps
) => <Avatar {...props} />;

Story.args = {
  avatarUrl: '',
  status: 'online',
  className: 'custom-alert'
};
