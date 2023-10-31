import type { Meta } from '@storybook/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { MainLayout } from '../../MainLayout/MainLayout';
import { Navbar } from './Navbar';
import { AboutPage } from '../../../pages/AboutPage/AboutPage';
import { AppRoutes } from '../../../AppRoutes';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

// type Story = StoryObj<typeof meta>;

const router = createMemoryRouter(
  [
    {
      path: AppRoutes.ROOT,
      element: <MainLayout />,
      // children: [
      //   {
      //     path: AppRoutes.ABOUT,
      //     element: <AboutPage />,
      //   },
      // ],
    },
    {
      path: AppRoutes.ABOUT,
      element: <AboutPage />,
    },
  ],
  {
    initialEntries: [AppRoutes.ROOT],
  }
);

export const _Navbar = () => <RouterProvider router={router} />;
