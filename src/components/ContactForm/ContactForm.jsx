import { Component } from 'react';
import { Form, Input, Paragraph, ButtonSubmit } from './ContactForm.styled';
import PropTypes from "prop-types";


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const event = e.target;
    if (event.type === 'text') {
      this.setState({ name: event.value });
    }
    if (event.type === 'tel') {
      this.setState({ number: event.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <label>
          <Paragraph>Name</Paragraph>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder="123-456-78"
          
          />
        </label>
        <ButtonSubmit type="submit">
          Add contact
        </ButtonSubmit>
      </Form>
    );
  }
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};