import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { MainContainer } from './Main/Main';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const includeName = name => {
      return this.state.contacts.find(
        elem => elem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
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

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onClickDelete = e => {
    const id = e.currentTarget.id;

    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== id)],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = () => {
    const { contacts, filter } = this.state;

    const toLowCaseFilter = filter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <MainContainer>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} changeFilter={this.changeFilter} />

        <ContactList
          contacts={this.filtredContacts()}
          contactDelete={this.onClickDelete}
        />
      </MainContainer>
    );
  }
}

export default App;

