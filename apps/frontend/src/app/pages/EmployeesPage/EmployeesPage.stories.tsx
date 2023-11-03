import type { Meta, StoryObj } from '@storybook/react';

import { EmployeesPage } from './EmployeesPage';
import { HttpResponse, http } from 'msw';
import { API_URL, mockedEmployeesResponse } from '../../mocks/handlers';
const meta = {
  title: 'Pages/EmployeesPage',
  component: EmployeesPage,
} satisfies Meta<typeof EmployeesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _EmployeesPage: Story = {};

_EmployeesPage.parameters = {
  msw: {
    handlers: [
      http.get(API_URL, () => {
        return HttpResponse.json(mockedEmployeesResponse, { status: 200 });
      }),
    ],
  },
};
