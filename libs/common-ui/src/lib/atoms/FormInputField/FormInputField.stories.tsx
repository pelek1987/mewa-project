import type { Meta, StoryObj } from '@storybook/react';

import { FormInputField } from './FormInputField';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof FormInputField> = {
  title: 'atoms/FormInputField',
  component: FormInputField,
};

type UserFormValues = {
  email: string;
};

const FormInputFieldWithReactHookForm = () => {
  const { register, formState } = useForm<UserFormValues>();

  return (
    <FormInputField<UserFormValues>
      label="Email:"
      id="email"
      placeholder="E-mail *"
      path="email"
      register={register}
      formState={formState}
    />
  );
};

export default meta;
type Story = StoryObj<typeof FormInputFieldWithReactHookForm>;

export const Default: Story = {
  render: () => <FormInputFieldWithReactHookForm />,
};
