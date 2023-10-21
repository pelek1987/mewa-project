import { Link, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../AppRoutes';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <nav className="mb-8 p-4">
        <ul className="flex list-none gap-x-2">
          <li>
            <Link to={AppRoutes.HOME}>Home</Link>
          </li>
          <li>
            <Link to={AppRoutes.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={AppRoutes.CONTACT}>Contact</Link>
          </li>
          <li>
            <Link to={AppRoutes.EMPLOYEES}>Employees</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow mb-8">
        <Outlet />
      </main>
      <footer className="p-4 text-center">&copy; 2023 MEWA</footer>
    </div>
  );
};
