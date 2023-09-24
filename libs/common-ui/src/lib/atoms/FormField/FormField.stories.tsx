import type { Meta, StoryObj } from '@storybook/react';

import { FormField } from './FormField';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof FormField> = {
  title: 'atoms/FormField',
  component: FormField,
};

type UserFormValues = {
  email: string;
};

const FormFieldWithReactHookForm = () => {
  const { register, formState } = useForm<UserFormValues>();

  return (
    <FormField<UserFormValues>
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
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => <FormFieldWithReactHookForm />,
};
