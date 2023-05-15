import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactSelectors';
import { deleteContact } from 'redux/contacts/contactOperations';

export default function ContactList({ openModal }) {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.wrapper}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <div className={s.buttonWrapper}>
            <button
              className={s.button}
              type="button"
              onClick={() => openModal({ id, name, number })}
            >
              Update
            </button>
            <button
              className={s.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
