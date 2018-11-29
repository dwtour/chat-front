import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick }) =>
    <button
      className="basic-button"
      onClick={() => { handleClick(); }}
    >
    SEND
    </button>;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
