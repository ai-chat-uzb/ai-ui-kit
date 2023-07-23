// dropdown.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Dropdown, { DropdownProps } from './dropdown';
import { MenuProps } from 'antd';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {}
} as Meta<typeof Dropdown>;

export const Story: StoryObj<typeof Dropdown> = (
  props: JSX.IntrinsicAttributes & DropdownProps
) => <Dropdown {...props} />;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    )
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    )
  }
];

Story.args = {
  children: 'Hello Dropdown',
  trigger: ['click'],
  placement: 'bottom',
  menu: { items },
  iconName: 'settings',
  iconSize: 24
};
