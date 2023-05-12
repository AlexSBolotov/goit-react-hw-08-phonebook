import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading tasks...</p>}
      <ContactList />
    </>
  );
}
