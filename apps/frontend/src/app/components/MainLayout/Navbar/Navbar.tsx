import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../AppRoutes';

export const Navbar = () => {
  return (
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
  );
};
