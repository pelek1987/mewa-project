import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../MainLayout';

const router = createBrowserRouter([{ path: '/', element: <MainLayout /> }]);

export const AppProviders = () => {
  return <RouterProvider router={router} />;
};
