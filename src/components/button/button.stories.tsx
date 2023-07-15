// button.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Button, { ButtonProps } from './button';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    view: {
      options: ['green', 'line', 'tertiary', 'outline', 'glass'],
      control: { type: 'select' }
    },
    colorView: {
      options: ['full', 'lighter', 'very-light'],
      control: { type: 'select' }
    }
  }
} as Meta<typeof Button>;

export const StoryComponent: StoryObj<typeof Button> = (
  props: JSX.IntrinsicAttributes & ButtonProps
) => <Button {...props} />;

StoryComponent.args = {
  children: 'Hi',
  size: 'small',
  loading: false,
  disabled: false,
  view: 'green'
};

// StoryComponent.story = {
//   name: 'Button'
// };
