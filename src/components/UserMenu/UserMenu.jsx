import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
export default function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Welcome, {name}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
