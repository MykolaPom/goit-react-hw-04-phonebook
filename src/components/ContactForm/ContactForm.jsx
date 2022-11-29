import {useState} from 'react'
import { Form, Input, Paragraph, ButtonSubmit } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    };
  };

  const onSubmitEvent = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitEvent}>
      <label>
        <Paragraph>Name</Paragraph>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
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
