// input.stories.tsx

import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Button from '../button/button';

import Input, { InputProps } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
} as Meta<typeof Input>;

export const Story: StoryObj<typeof Input> = (
  props: JSX.IntrinsicAttributes & InputProps
) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<{ firstName: string }>({
    defaultValues: { firstName: '' }
  });

  const onSubmit = values => {
    console.log('values = ', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        errorMsg={errors.firstName?.message}
        {...props}
        control={control}
        name="firstName"
        type="text"
        placeholder="Name"
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
  placeholder: 'Name'
};
