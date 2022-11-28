// import { Component } from 'react';
import { useState } from 'react';
import { Form, Input, Paragraph, ButtonSubmit } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {

  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setContactName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    };
  };

    const reset = () => {
      setContactName('');
      setNumber('');
    };


  const onCLickBtnSubmit = e => {
    e.preventDefault();

    onSubmit({ contactName, number });
    reset();
  };

  return (
    <Form onSubmit={onCLickBtnSubmit}>
      <label>
        <Paragraph>Name</Paragraph>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={contactName}
          onChange={handleChange}
          placeholder="Enter your Name"
        />
      </label>
      <label>
        <Paragraph>Number</Paragraph>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={number}
          onChange={handleChange}
          placeholder="123-456-78"
        />
      </label>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
