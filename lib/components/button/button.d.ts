import React from 'react';
import { ButtonProps as BaseButtonProps } from 'antd/lib/button/button';
export interface ButtonProps extends Pick<BaseButtonProps, 'className' | 'loading' | 'disabled' | 'htmlType' | 'onClick'> {
    size: 'small' | 'medium' | 'large';
    colorView?: 'full' | 'lighter' | 'very-light';
    view: 'green' | 'line' | 'tertiary' | 'outline' | 'glass';
    children: React.ReactNode;
    icon?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
