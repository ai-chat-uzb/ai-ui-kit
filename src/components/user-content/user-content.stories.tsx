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
  status: 'active',
  chat: 'group',
  author: false,
  url: 'https://firebasestorage.googleapis.com/v0/b/ai-chat-c50cc.appspot.com/o/avatar-img-7.png?alt=media&token=91f50fb9-a8a8-43a1-81e0-77fbf95dce83'
};
