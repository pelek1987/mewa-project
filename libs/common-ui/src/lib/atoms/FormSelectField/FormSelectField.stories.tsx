import type { Meta, StoryObj } from '@storybook/react';

import { FormSelectField } from './FormSelectField';

const meta = {
  title: 'atoms/FormSelectField',
  tags: ['autodocs'],
  component: FormSelectField,
} satisfies Meta<typeof FormSelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Location',
    id: 'location',
    options: [
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
    ],
  },
};
