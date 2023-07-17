// typography.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Typography, { TypographyProps } from './typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    size: {
      options: 'number'
    },
    lineHeight: {
      options: 'number'
    },
    weight: {
      options: ['number', 'string']
    },
    spacing: {
      options: 'number'
    },
    color: {
      options: 'string'
    },
    padding: {
      options: ['string', 'number']
    },
    margin: {
      options: ['string', 'number']
    },
    tagName: {
      // @ts-ignore
      options: ['p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'],
      control: { type: 'select' }
    },
    textAlign: {
      // @ts-ignore
      options: ['center' | 'start' | 'end'],
      control: { type: 'select' }
    }
  }
} as Meta<typeof Typography>;

export const Story: StoryObj<typeof Typography> = (
  props: JSX.IntrinsicAttributes & TypographyProps
) => <Typography {...props} />;

Story.args = {
  children: <>Hello Typography</>,
  size: 18,
  weight: 500,
  lineHeight: 24,
  spacing: 0.5,
  color: '--color-heisenberg-5',
  padding: 0,
  margin: 0,
  tagName: 'div',
  textAlign: 'center'
};
