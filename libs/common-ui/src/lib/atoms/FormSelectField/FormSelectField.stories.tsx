import type { Meta, StoryObj } from '@storybook/react';

import { FormSelectField } from './FormSelectField';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof FormSelectField> = {
  title: 'atoms/FormSelectField',
  tags: ['autodocs'],
  component: FormSelectField,
};

const locationOptions = [
  {
    label: 'Canada',
    value: 'ca',
    default: true,
  },
  {
    label: 'United States',
    value: 'us',
    default: false,
  },
  {
    label: 'Australia',
    value: 'au',
    default: false,
  },
];

const FormSelectFieldWithReactHookForm = () => {
  const { register } = useForm<{ location: string }>();

  return (
    <FormSelectField
      id="location"
      label="Location: "
      path="location"
      register={register}
      options={locationOptions}
    />
  );
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FormSelectFieldWithReactHookForm />,
};
