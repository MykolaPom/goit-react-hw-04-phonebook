import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { MainContainer } from './Main/Main';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');
  
    useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const addContact = ({ name, number }) => {
    const includeName = name => {
      return contacts.find(
        elem => elem.name.toLowerCase() === name.toLowerCase()
      );
    };

    const contact = {
      id: nanoid(10),
      name,
      number,
    };
    if (includeName(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const onClickDelete = e => {
    const id = e.currentTarget.id;

    setContacts(prevState => [...prevState.filter(el => el.id !== id)]);
  };

    const filteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

    const changeFilter = e => {
      setFilter(e.currentTarget.value);
    };
  
  return (
    <MainContainer>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} changeFilter={changeFilter} />

      <ContactList
        contactList={filteredContacts()}
        deleteContact={onClickDelete}
      />
    </MainContainer>
  );
};
