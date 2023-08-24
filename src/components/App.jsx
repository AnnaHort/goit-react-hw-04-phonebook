import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect, useState } from 'react';

export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', contacts: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', contacts: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', contacts: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', contacts: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('quiz-contacts', JSON.stringify(contacts))
 },[contacts]);

  useEffect( () => {
    const savedContacts = localStorage.getItem('quiz-contacts');
    if(savedContacts !== null) {
    setContacts(JSON.parse(savedContacts));
         }
   }, []);


  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    if (existContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const existContact = newContactName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName.toLowerCase()
    );
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const handleDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <SectionContainer>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <QuizForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onChangeFilter={changeFilter} />
      <ContactList contact={visibleContacts} deleteContact={handleDelete} />
    </SectionContainer>
  );
};