import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './MainNav.module.css';
export default function MainNav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(isActive ? s.active : s.link);
        }}
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => {
          return clsx(isActive ? s.active : s.link);
        }}
      >
        <span>Contacts</span>
      </NavLink>
    </nav>
  );
}
