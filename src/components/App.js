import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = value => {
    const filterNormalize = value.toLowerCase();
    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  formSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter
            title="Find contact by name"
            onChange={this.handleFilterChange}
            value={this.state.filter}
          />

          <ContactList
            onFilter={this.filteredContacts}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}

export default App;
