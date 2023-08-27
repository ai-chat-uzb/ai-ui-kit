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

const Dropdown: React.FC<DropdownProps> = ({
  iconName,
  iconSize,
  menu,
  ...args
}) => (
  <div className={cls.wrapper}>
    <BaseDropdown overlayClassName="custom-dropdown-menu" menu={menu} {...args}>
      {iconName && <Icon name={iconName} size={iconSize} />}
    </BaseDropdown>
  </div>
);

export default Dropdown;
