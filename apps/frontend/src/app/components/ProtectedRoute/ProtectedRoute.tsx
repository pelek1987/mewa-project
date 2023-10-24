import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../AppRoutes';

type ProtectedRouteProps = {
  user?: boolean;
  children: React.ReactNode;
};

export const ProtectedRoute = ({
  children,
  user = false,
}: ProtectedRouteProps) => {
  if (user) {
    return children;
  }
  return <Navigate to={AppRoutes.SIGNUP} />;
};
