import React from 'react';
import Message from "./Message";
import PropTypes from "prop-types";

const Input = ({ handleChange }) =>
            <input
                type="text"
                className="message-wrapper"
                id="input"
                onChange={handleChange}
            />;

Input.propTypes = {
    handleChange: PropTypes.func,
};

export default Input;
