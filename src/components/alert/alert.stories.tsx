// alert.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Alert, { AlertProps } from './alert';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'select' }
    },
    iconName: {
      options: 'string'
    },
    iconSize: {
      control: 'number'
    },
    title: {
      options: 'string'
    },
    alertSubTitle: {
      options: 'string'
    },
    subTitle: {
      options: 'string'
    }
  }
} as Meta<typeof Alert>;

export const StoryComponent: StoryObj<typeof Alert> = (
  props: JSX.IntrinsicAttributes & AlertProps
) => <Alert {...props} />;

StoryComponent.args = {
  iconName: 'checkCircle',
  iconSize: 24,
  type: 'success',
  title: 'Title',
  alertSubTitle: 'Success!',
  subTitle: 'Just Do It'
};
