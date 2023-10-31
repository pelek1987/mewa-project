import type { Meta, StoryObj } from '@storybook/react';

import { SignUpPage } from './SignUpPage';

const meta = {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
} satisfies Meta<typeof SignUpPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _SignUpPage: Story = {};
