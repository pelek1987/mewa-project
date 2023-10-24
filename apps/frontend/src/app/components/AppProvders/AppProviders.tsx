import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import {
  HomePage,
  AboutPage,
  ContactPage,
  EmployeesPage,
  SignUpPage,
} from '../../pages';
import { AppRoutes } from '../../AppRoutes';
import { ProtectedRoute } from '../ProtectedRoute';
import { useState } from 'react';

export const AppProviders = () => {
  const [user, setUser] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: AppRoutes.HOME, element: <HomePage /> },
        { path: AppRoutes.ABOUT, element: <AboutPage /> },
        { path: AppRoutes.CONTACT, element: <ContactPage /> },
        {
          path: AppRoutes.EMPLOYEES,
          element: (
            <ProtectedRoute user={user}>
              <EmployeesPage />
            </ProtectedRoute>
          ),
        },
        { path: AppRoutes.SIGNUP, element: <SignUpPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
