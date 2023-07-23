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
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        officia earum, eveniet, odio, excepturi maxime assumenda eaque similique
        aspernatur debitis harum praesentium. Illum consequuntur adipisci
        doloremque similique labore laboriosam fuga soluta quia accusamus, ipsam
        aperiam? Vel obcaecati numquam, aliquid aliquam laborum ad esse ea!
        Aperiam doloribus, error maxime mollitia explicabo officia. Rerum fugit
        voluptate debitis iste numquam suscipit corrupti, quos facere
        repellendus amet veritatis expedita quis sit deserunt, nihil minus
        placeat exercitationem ipsam assumenda quia libero? Odit, ipsa animi
        repellendus sed libero beatae labore iure atque itaque ipsam sunt, illum
        sint in nihil accusantium porro molestiae non magnam delectus alias.
      </p>
    )
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
