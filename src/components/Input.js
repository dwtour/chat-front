import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  let input;
  return (
        <input
            type="text"
            className="message-wrapper"
            id="input"
            onChange={() => {
              props.dispatch(input.value);
            }}
            ref={(node) => {
              input = node;
            }}
        />
  );
};

Input.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Input;
