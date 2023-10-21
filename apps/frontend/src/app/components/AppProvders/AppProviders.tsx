import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { HomePage } from '../../pages/HomePage';
import { AboutPage } from '../../pages/AboutPage';
import { ContactPage } from '../../pages/ContactPage';
import { EmployeesPage } from '../../pages/EmployeesPgae';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'employees', element: <EmployeesPage /> },
    ],
  },
]);

export const AppProviders = () => {
  return <RouterProvider router={router} />;
};
