import React from 'react';
import { Modal as AsModal, ModalProps as BaseModalProps } from 'antd';

import Icon from 'components/icon/icon';

import cls from './modal.module.scss';

export interface ModalProps extends BaseModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, ...args }) => (
  <div className={cls.wrapper}>
    <AsModal closeIcon={<Icon size={18} name="cross" />} centered {...args}>
      {children}
    </AsModal>
  </div>
);

export default Modal;
