import { Link, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../AppRoutes';

export const MainLayout = () => {
  return (
    <div>
      <nav>
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
      <Outlet />
      <footer>&copy; 2023 MEWA</footer>
    </div>
  );
};
