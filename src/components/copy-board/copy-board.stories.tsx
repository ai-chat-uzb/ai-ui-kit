// copy-board.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import CopyBoard, { CopyBoardProps } from './copy-board';

export default {
  title: 'Components/CopyBoard',
  component: CopyBoard,
  argTypes: {}
} as Meta<typeof CopyBoard>;

export const Story: StoryObj<typeof CopyBoard> = (
  props: JSX.IntrinsicAttributes & CopyBoardProps
) => <CopyBoard {...props} />;

Story.args = {
  text: 'hello👋'
};
