import React from 'react';
import type { TabsProps as BaseTabsProps } from 'antd';
import { Tabs as BaseTabs } from 'antd';
import cx from 'classnames';

import cls from './tabs.module.scss';

export interface TabsProps extends BaseTabsProps {}

const Tabs: React.FC<TabsProps> = ({ items, className, ...args }) => (
  <div className={cx(cls.wrapper, className && className)}>
    <BaseTabs items={items} className={`${className}-tabs`} {...args} />
  </div>
);

export default Tabs;
