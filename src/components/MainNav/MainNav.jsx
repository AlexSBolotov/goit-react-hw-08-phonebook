import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './MainNav.module.css';
// import Button from '@mui/material/Button';
import clsx from 'clsx';

import { selectIsLogin } from 'redux/auth/authSelectors';

export default function MainNav() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(isActive ? s.active : s.link);
        }}
      >
        {/* <Button>Home</Button> */}
        <span>HOME</span>
      </NavLink>
      {isLogin && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return clsx(isActive ? s.active : s.link);
          }}
        >
          {/* <Button>Contacts</Button> */}
          <span>CONTACTS</span>
        </NavLink>
      )}
    </nav>
  );
}
