// modal.stories.tsx

import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Modal, { ModalProps } from './modal';
import Button from '../button/button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {}
} as Meta<typeof Modal>;

export const Story: StoryObj<typeof Modal> = (
  props: JSX.IntrinsicAttributes & ModalProps
) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Button
        size={'medium'}
        colorView={'full'}
        view="glass"
        onClick={() => setState(!state)}
      >
        Modal
      </Button>
      <Modal
        title="Xushnudbek"
        open={state}
        footer={null}
        onCancel={() => setState(!state)}
        {...props}
      />
    </div>
  );
};

Story.args = {
  children: <h1>Hello Modal</h1>
};
