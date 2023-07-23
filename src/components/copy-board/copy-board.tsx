/* eslint-disable @typescript-eslint/return-await */
import React, { useState } from 'react';
import cx from 'classnames';

import Icon from 'components/icon/icon';

import cls from './copy-board.module.scss';

export interface CopyBoardProps {
  text: string;
}

const CopyBoard: React.FC<CopyBoardProps> = ({ text }) => {
  const [copy, setCopy] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={() => handleCopyClick()}
      className={cx(cls.wrapper, copy ? cls.copy : cls['no-copy'])}
    >
      <Icon name={copy ? 'check' : 'copy'} size={20} color="--color-black-4" />
    </button>
  );
};

export default CopyBoard;
