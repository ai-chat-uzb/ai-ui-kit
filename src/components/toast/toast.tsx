import React from 'react';
import { message } from 'antd';

import Icon from 'components/icon/icon';
import Typography from 'components/typography/typography';

import './toast.module.scss';

export interface ToastProps {}

const toast = {
  success: (content: string, smile?: string) =>
    message.open({
      content: (
        <Typography
          size={14}
          lineHeight={18}
          weight={500}
          color="--color-black-2"
        >
          {content}
        </Typography>
      ),
      type: 'success',
      duration: 2,
      icon: <Icon name="checkSquare" color="--color-green-5" size={24} />
    }),

  error: (content: string, smile?: string) =>
    message.open({
      content: (
        <Typography
          size={14}
          lineHeight={18}
          weight={500}
          color="--color-black-2"
        >
          {content}
        </Typography>
      ),
      type: 'error',
      duration: 2,
      icon: (
        <Icon name="fullCrossCircle" color="--color-red-power-2" size={24} />
      )
    })
};

export default toast;
