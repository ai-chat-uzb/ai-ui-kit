import React from 'react';
import {
  Dropdown as BaseDropdown,
  DropDownProps as BaseDropdownProps
} from 'antd';

import Icon, { ListProps } from 'components/icon/icon';

import cls from './dropdown.module.scss';

export interface DropdownProps extends BaseDropdownProps {
  iconName?: ListProps;
  iconSize?: number;
}

const Dropdown: React.FC<DropdownProps> = ({ iconName, iconSize, ...args }) => (
  <div className={cls.wrapper}>
    <BaseDropdown {...args}>
      {iconName && <Icon name={iconName} size={iconSize} />}
    </BaseDropdown>
  </div>
);

export default Dropdown;
