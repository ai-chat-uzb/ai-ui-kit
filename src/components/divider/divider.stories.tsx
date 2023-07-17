// divider.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Divider, { DividerProps } from './divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    width: {
      options: 'number'
    },
    height: {
      options: 'number'
    },
    backgroundColor: {
      options: 'string'
    },
    padding: {
      options: ['string', 'number']
    },
    margin: {
      options: ['string', 'number']
    }
  }
} as Meta<typeof Divider>;

export const Story: StoryObj<typeof Divider> = (
  props: JSX.IntrinsicAttributes & DividerProps
) => <Divider {...props} />;

Story.args = {
  width: 300,
  height: 2,
  backgroundColor: '--color-green-5',
  padding: 0,
  margin: 0
};
