// color.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Color, { ColorProps } from './color';

export default {
  title: 'Components/Color',
  component: Color,
  argTypes: {}
} as Meta<typeof Color>;

export const Story: StoryObj<typeof Color> = (
  props: JSX.IntrinsicAttributes & ColorProps
) => <Color {...props} />;

Story.args = {
  children: <h1>Hello Color</h1>
};
