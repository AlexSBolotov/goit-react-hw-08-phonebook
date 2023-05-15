import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/contacts/contactOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNamesDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const payload = {
      name: name,
      number: number,
    };
    isNamesDublicated
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(payload));

    form.reset();
  };
  return (
    <form className={s.wrapper} action="" onSubmit={onFormSubmit}>
      {/* <label htmlFor="name">Name</label> */}
      <TextField
        fullWidth
        label="Name"
        id="name"
        name="name"
        // value={name}
        // onChange={handleChange}
        placeholder="Enter contact name..."
        required
      />
      {/* <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      /> */}
      {/* <label htmlFor="number">Number</label> */}
      <TextField
        fullWidth
        label="Number"
        id="number"
        name="number"
        // value={name}
        // onChange={handleChange}
        placeholder="Enter contact phone number..."
        required
      />
      {/* <input
        id="number"
        type="text"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      /> */}
      <Button variant="outlined" type="submit">
        Add contact
      </Button>
      {/* <button className={s.button} type="submit">
        Add contact
      </button> */}
    </form>
  );
}
