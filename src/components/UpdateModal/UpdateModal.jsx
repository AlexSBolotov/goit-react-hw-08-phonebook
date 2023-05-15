import s from './UpdateModal.module.css';
import { updateContact } from 'redux/contacts/contactOperations';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

export default function UpdateModal({ closeModal, contactToUpdate }) {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);
  const dispatch = useDispatch();

  const onInputChange = e => {
    const input = e.target;
    switch (input.name) {
      case 'name':
        setName(input.value);
        break;
      case 'number':
        setNumber(input.value);
        break;
      default:
        return;
    }
  };
  const onCancelClick = () => {
    closeModal();
  };
  const onUpdateClick = () => {
    dispatch(
      updateContact({ id: contactToUpdate.id, name: name, number: number })
    );
    closeModal();
  };
  const handleKeydown = e => {
    if (e.code === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
  return createPortal(
    <div className={s.overlay}>
      <div className={s.wrapper}>
        <h2>Update contact</h2>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="text"
          name="number"
          value={number}
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div className={s.btnWrapper}>
          <button className={s.button} type="button" onClick={onUpdateClick}>
            Update
          </button>
          <button className={s.button} type="button" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

UpdateModal.propTypes = {
  contactToUpdate: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  closeModal: PropTypes.func,
};
