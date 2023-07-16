import React from 'react';
import * as List from './list';
export interface IIconProps {
    name: keyof typeof List;
    size?: number;
    className?: string;
    color?: string;
    onClick?: () => void;
    cy?: string;
}
declare const Icon: React.FC<IIconProps>;
export default Icon;
