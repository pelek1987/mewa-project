import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { HomePage, AboutPage, ContactPage, EmployeesPage } from '../../pages';
import { AppRoutes } from '../../AppRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: AppRoutes.HOME, element: <HomePage /> },
      { path: AppRoutes.ABOUT, element: <AboutPage /> },
      { path: AppRoutes.CONTACT, element: <ContactPage /> },
      { path: AppRoutes.EMPLOYEES, element: <EmployeesPage /> },
    ],
  },
]);

export const AppProviders = () => {
  return <RouterProvider router={router} />;
};
