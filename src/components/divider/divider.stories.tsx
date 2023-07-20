// divider.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import Typography from '../typography/typography';

import Divider, { DividerProps } from './divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {}
} as Meta<typeof Divider>;

export const Story: StoryObj<typeof Divider> = (
  props: JSX.IntrinsicAttributes & DividerProps
) => <Divider {...props} />;

Story.args = {
  className: 'custom-divider',
  children: 'Text',
  plain: true,
  width: 440
};
