import React, { useState } from 'react';
import cx from 'classnames';

import Typography from 'components/typography/typography';
import UserCard from 'components/user-card/user-card';

import Avatar from '../avatar/avatar';
import Icons from '../icon/index';

import cls from './dropdown.module.scss';

export interface DropdownProps {
  selectedAccount: {
    id: number;
    title: string;
    subTitle: string;
    avatarUrl: string;
  };
  accounts: {
    id: number;
    title: string;
    subTitle: string;
    avatarUrl: string;
  }[];
  className?: string;
  onClick: (arg) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  accounts,
  selectedAccount,
  onClick,
  className
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx(cls.wrapper, className && className)}>
      <div className={cls.selected} onClick={() => setOpen(!open)}>
        <Avatar avatarUrl={selectedAccount.avatarUrl} />
        <div className={cls.info}>
          <Typography
            size={16}
            color="--color-white"
            weight={600}
            spacing={0.15}
          >
            {selectedAccount.title}
          </Typography>
          <Typography
            size={12}
            color="--color-green-5"
            weight={500}
            spacing={0.15}
            lineHeight={18}
          >
            {selectedAccount.subTitle}
          </Typography>
        </div>
        <div className={cls['arrow-icon']}>
          {open ? (
            <Icons name="chevronUp" size={24} />
          ) : (
            <Icons name="chevronDown" size={24} />
          )}
        </div>
      </div>

      <div className={cx(cls['sub-wrapper'], open && cls.opened)}>
        {accounts.map(item => (
          <div className={cls.wrap}>
            <UserCard
              avatarUrl={item.avatarUrl}
              title={item.title}
              subTitle={item.subTitle}
              onClick={() => onClick(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
