import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, contactDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <ButtonDelete id={contact.id} onClick={contactDelete}>
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactDelete: PropTypes.func.isRequired,
};
