// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email:',
    type: 'email',
    name: 'email',
    id: 'email',
  },
};
