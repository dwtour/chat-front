import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ saveValue, inputData}) =>
    <input
      type="text"
      className="message-wrapper"
      id="input"
      onChange={(e) => {
        saveValue(e.target.value);
      }}
      value={inputData}
    />;


Input.propTypes = {
  inputData: PropTypes.string.isRequired,
  saveValue: PropTypes.func.isRequired,
};

export default Input;
