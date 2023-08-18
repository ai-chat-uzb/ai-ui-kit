// toast.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Button from '../button/button';

import toast from './toast';

export default {
  title: 'Components/Toast',
  argTypes: {}
};

export const Story = (props: JSX.IntrinsicAttributes) => (
  <div>
    <Button
      onClick={() => toast.success('hello world')}
      size="large"
      colorView="full"
      view="glass"
    >
      Success Toast
    </Button>
  </div>
);

Story.args = {
  children: <h1>Hello Toast</h1>
};
