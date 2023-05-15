import s from './ContactList.module.css';
// import s from '../ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactSelectors';
import { deleteContact } from 'redux/contacts/contactOperations';
import Button from '@mui/material/Button';

export default function ContactList({ openModal }) {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.wrapper}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className={s.textWrapper}>
            <p>Name: {name.toUpperCase()}</p>
            <p>Number: {number}</p>
          </div>
          <div className={s.buttonWrapper}>
            <Button
              // variant="outlined"
              type="button"
              fullWidth
              size="small"
              onClick={() => openModal({ id, name, number })}
            >
              Update
            </Button>
            {/* <button
              className={s.button}
              type="button"
              onClick={() => openModal({ id, name, number })}
            >
              Update
            </button> */}
            <Button
              // variant="outlined"
              type="button"
              fullWidth
              size="small"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
            {/* <button
              className={s.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button> */}
          </div>
        </li>
      ))}
    </ul>
  );
}
