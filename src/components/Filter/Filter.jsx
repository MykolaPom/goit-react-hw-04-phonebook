import React from "react";
import PropTypes from 'prop-types';
import {Input} from "./Filter.styled"

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <Input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
