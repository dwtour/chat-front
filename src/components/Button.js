import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, isDisabled }) => {
  if (isDisabled) {
    return (
      <button
        disabled
        className="basic-button"
        onClick={() => {
          // alert(`isDisabled: ${isDisabled}`);
          handleClick(); }}
      >
        SEND
      </button>);
  } else {
    return (
      <button
        className="basic-button"
        onClick={() => {
          // alert(`isDisabled: ${isDisabled}`);
          handleClick(); }}
      >
        SEND
      </button>);
  }
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
