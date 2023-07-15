import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Title, Source } from '@storybook/addon-docs/blocks';
import dedent from 'ts-dedent';

import Icon from './icon';
import * as list from './list';

// @ts-ignore
import classes from './icon.stories.module.scss';

export default {
  title: 'Components/Icons'
} as ComponentMeta<typeof Icon>;

type key = keyof typeof list;

const keys = Object.keys(list) as key[];

export const Story = () => (
  <div className={classes.wrapper}>
    <div className={classes.title}>Icons</div>
    <div className={classes.icons}>
      {keys.map((icon, index) => (
        <div className={classes.item} key={index}>
          <div className={classes['item-icon']}>
            <Icon name={icon} size={30} />
          </div>
          <div className={classes['item-title']}>{icon}</div>
        </div>
      ))}
    </div>
  </div>
);

Story.story = {
  name: 'Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => (
        <>
          <Title />
          <Source
            dark
            language="js"
            code={dedent`
              import Icon from 'components/Icon';

              <Icon name="person" size={10} />  // name lowercase, size number @default 15

              <Icon name="logout" size={10} />  // name lowercase, size number @default 15
            `}
          />
        </>
      )
    }
  }
};
