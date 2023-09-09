import React from 'react';
import { message } from 'antd';

import Icon, { ListProps } from 'components/icon/icon';
import Typography from 'components/typography/typography';

import './toast.module.scss';

export interface ToastProps {}

const toast = {
  // * success
  success: ({
    title,
    content,
    duration,
    iconName
  }: {
    title?: string;
    content: string;
    smile?: string;
    duration?: number;
    iconName?: ListProps;
  }) =>
    message.open({
      content: (
        <div className="toast-container">
          <div className="toast-row">
            {title && (
              <Typography
                size={16}
                lineHeight={24}
                weight={600}
                spacing={0.25}
                color="--color-black-2"
                className="toast-title"
              >
                {title.slice(0, 1).toLocaleUpperCase()}
                {title.slice(1, title.length)}
              </Typography>
            )}
            <div className="toast-content">
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-electric-green-2"
                className="toast-error"
              >
                Success!
              </Typography>
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-black-2"
              >
                {content.slice(0, 1).toLocaleUpperCase()}
                {content.slice(1, content.length)}
              </Typography>
            </div>
          </div>
        </div>
      ),
      type: 'success',
      duration: duration || 2,
      icon: (
        <Icon
          name={iconName || 'checkCircle'}
          color="--color-electric-green-2"
          size={28}
        />
      ),
      className: title && 'add-title'
    }),

  // ? error
  error: ({
    title,
    content,
    duration,
    iconName
  }: {
    title?: string;
    content: string;
    smile?: string;
    duration?: number;
    iconName?: ListProps;
  }) =>
    message.open({
      content: (
        <div className="toast-container">
          <div className="toast-row">
            {title && (
              <Typography
                size={16}
                lineHeight={24}
                weight={600}
                spacing={0.25}
                color="--color-black-2"
                className="toast-title"
              >
                {title.slice(0, 1).toLocaleUpperCase()}
                {title.slice(1, title.length)}
              </Typography>
            )}
            <div className="toast-content">
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-red-power-2"
                className="toast-error"
              >
                Error.
              </Typography>
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-black-2"
              >
                {content.slice(0, 1).toLocaleUpperCase()}
                {content.slice(1, content.length)}
              </Typography>
            </div>
          </div>
        </div>
      ),
      type: 'error',
      duration: duration || 2,
      icon: (
        <Icon
          name={iconName || 'alertHexagon'}
          color="--color-red-power-2"
          size={28}
        />
      ),
      className: title && 'add-title'
    }),

  // ! warning
  warning: ({
    title,
    content,
    duration,
    iconName
  }: {
    title?: string;
    content: string;
    smile?: string;
    duration?: number;
    iconName?: ListProps;
  }) =>
    message.open({
      content: (
        <div className="toast-container">
          <div className="toast-row">
            {title && (
              <Typography
                size={16}
                lineHeight={24}
                weight={600}
                spacing={0.25}
                color="--color-black-2"
                className="toast-title"
              >
                {title.slice(0, 1).toLocaleUpperCase()}
                {title.slice(1, title.length)}
              </Typography>
            )}
            <div className="toast-content">
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-happy-orange-2"
                className="toast-error"
              >
                Warning!
              </Typography>
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-black-2"
              >
                {content.slice(0, 1).toLocaleUpperCase()}
                {content.slice(1, content.length)}
              </Typography>
            </div>
          </div>
        </div>
      ),
      type: 'warning',
      duration: duration || 2,
      icon: (
        <Icon
          name={iconName || 'alertTriangle'}
          color="--color-happy-orange-2"
          size={28}
        />
      ),
      className: title && 'add-title'
    }),

  // => info
  info: ({
    title,
    content,
    duration,
    iconName
  }: {
    title?: string;
    content: string;
    smile?: string;
    duration?: number;
    iconName?: ListProps;
  }) =>
    message.open({
      content: (
        <div className="toast-container">
          <div className="toast-row">
            {title && (
              <Typography
                size={16}
                lineHeight={24}
                weight={600}
                spacing={0.25}
                color="--color-black-2"
                className="toast-title"
              >
                {title.slice(0, 1).toLocaleUpperCase()}
                {title.slice(1, title.length)}
              </Typography>
            )}
            <div className="toast-content">
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-blue-5"
                className="toast-error"
              >
                Did you know?
              </Typography>
              <Typography
                size={14}
                lineHeight={20}
                weight={500}
                color="--color-black-2"
              >
                {content.slice(0, 1).toLocaleUpperCase()}
                {content.slice(1, content.length)}
              </Typography>
            </div>
          </div>
        </div>
      ),
      type: 'info',
      duration: duration || 2,
      icon: <Icon name={iconName || 'bulb'} color="--color-blue-5" size={28} />,
      className: title && 'add-title'
    })
};

export default toast;
