import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contactList, deleteContact }) => {
  
  return (
    <ul>
      {contactList.map(({id, name, number}) => (
        <li key={id}>
          {name}:<span>{number}</span>
          <ButtonDelete id={id} onClick={deleteContact}>
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
  deleteContact: PropTypes.func.isRequired,
};
