import React from 'react';
import { Divider as AsDivider, DividerProps as BaseDividerProps } from 'antd';

import './divider.module.scss';

export interface DividerProps extends BaseDividerProps {
  width?: string | number;
}

const Divider: React.FC<DividerProps> = ({ width, ...props }) => (
  <AsDivider style={{ width: width }} {...props} />
);

export default Divider;
