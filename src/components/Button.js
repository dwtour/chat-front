import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, isDisabled }) =>
      <button
        disabled={isDisabled}
        className="basic-button"
        onClick={() => { handleClick(); }}
      >
        SEND
      </button>;


Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
