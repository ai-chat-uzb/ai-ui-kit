// hi.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hi from './hi';

export default {
  title: 'Components/Hi',
  component: Hi,
  argTypes: {}
} as ComponentMeta<typeof Hi>;

export const Story: ComponentStory<typeof Hi> = props => <Hi {...props} />;

Story.args = {
  children: <h1>Hello Hi</h1>
};

Story.story = {
  name: 'Hi'
};
