// Password.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Button from '../button/button';

import Password, { PasswordProps } from './password';

export default {
  title: 'Components/Password',
  component: Password,
  argTypes: {}
} as Meta<typeof Password>;

export const Story: StoryObj<typeof Password> = (
  props: JSX.IntrinsicAttributes & PasswordProps
) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<{ password: string }>({
    defaultValues: { password: '' }
  });

  const onSubmit = values => {
    console.log('values = ', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Password
        errorMsg={errors.password?.message}
        {...props}
        control={control}
        name="password"
        placeholder="password"
      />
      <div style={{ display: 'flex', marginTop: 32, gap: 20 }}>
        <Button size={'small'} colorView={'full'} view={'line'}>
          Submit
        </Button>
        <Button
          size={'small'}
          colorView={'full'}
          view={'line'}
          onClick={() => reset()}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

Story.args = {
  placeholder: 'Name',
  label: 'Label'
};
