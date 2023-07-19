// tabs.stories.tsx

import React from 'react';
import Icon from '../icon/icon';

import { StoryObj, Meta } from '@storybook/react';

import Tabs, { TabsProps } from './tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {}
} as Meta<typeof Tabs>;

export const Story: StoryObj<typeof Tabs> = (
  props: JSX.IntrinsicAttributes & TabsProps
) => <Tabs {...props} />;

const items = [
  {
    key: '1',
    label: (
      <>
        <Icon size={20} name="logo" /> <span>Artificium</span>
      </>
    ),
    children: `Content of Tab Pane 1`
  },
  {
    key: '2',
    label: (
      <>
        <Icon size={20} name="commentCircle" /> <span>Chat</span>
      </>
    ),
    children: `Content of Tab Pane 2`
  },
  {
    key: '3',
    label: (
      <>
        <Icon size={20} name="folder" /> <span>Library</span>
      </>
    ),
    children: `Content of Tab Pane 3`
  }
];

Story.args = {
  items,
  defaultActiveKey: '2'
};
