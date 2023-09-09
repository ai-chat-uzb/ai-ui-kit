// user-content.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import UserContent, { UserContentProps } from './user-content';

export default {
  title: 'Components/UserContent',
  component: UserContent,
  argTypes: {}
} as Meta<typeof UserContent>;

export const Story: StoryObj<typeof UserContent> = (
  props: JSX.IntrinsicAttributes & UserContentProps
) => <UserContent {...props} />;

Story.args = {
  userName: 'Xushnudbek',
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        officia earum, eveniet, odio, excepturi maxime assumenda eaque similique
        aspernatur debitis harum praesentium. Illum consequuntur adipisci
        doloremque similique labore laboriosam fuga soluta quia accusamus, ipsam
        aperiam?`,
  date: 'just now',
  url: 'https://firebasestorage.googleapis.com/v0/b/ai-chat-c50cc.appspot.com/o/avatar-img-1.svg?alt=media&token=465c5a85-86e0-4a78-9355-a6ed0fc8ded6',
  status: 'active',
  chat: 'private',
  author: true
};
