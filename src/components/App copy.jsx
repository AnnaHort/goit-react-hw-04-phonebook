import React, { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle, SectionContainer } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', contacts: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', contacts: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', contacts: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', contacts: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  
  componentDidMount() {
   const savedContacts = localStorage.getItem('quiz-contacts');
   if(savedContacts !== null) {
this.setState({contacts: JSON.parse(savedContacts)})
   }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('quiz-contacts', JSON.stringify(this.state.contacts))
    }
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    if (this.existContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

 existContact = newContactName => {
    return this.state.contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContactName.toLocaleLowerCase()
    );
  };

  handleDelete = (contactId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId 
        ),
      };
    });
  }

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <SectionContainer>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <QuizForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList contact={visibleContacts} deleteContact ={this.handleDelete}/>
      </SectionContainer>
    );
  }
}