// hello.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hello from './hello';

export default {
  title: 'Components/Hello',
  component: Hello,
  argTypes: {}
} as ComponentMeta<typeof Hello>;

export const Story: ComponentStory<typeof Hello> = props => (
  <Hello {...props} />
);

Story.args = {
  children: <h1>Hello Hello</h1>
};

Story.story = {
  name: 'Hello'
};
