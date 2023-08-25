import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect, useState } from 'react';

export const App = () => {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('quiz-contacts')) || []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('quiz-contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      <ContactList contact={visibleContacts} deleteContact={handleDelete}/>
    </SectionContainer>
  );
};
