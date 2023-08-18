// avatar.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Avatar, { AvatarProps } from './avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    url: {
      options: 'string'
    },
    status: {
      options: ['active', 'disturb', 'away', 'offline', 'off'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'select' }
    }
  }
} as Meta<typeof Avatar>;

export const Story: StoryObj<typeof Avatar> = (
  props: JSX.IntrinsicAttributes & AvatarProps
) => <Avatar {...props} />;

Story.args = {
  url: 'https://firebasestorage.googleapis.com/v0/b/ai-chat-c50cc.appspot.com/o/Person%3DEmily%20Liu.svg?alt=media&token=e20ad0ee-e6bb-4ae6-aee4-4b44e26084a7',
  status: 'offline',
  size: 'large'
};
