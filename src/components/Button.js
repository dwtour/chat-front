import React from 'react';
import Message from "./Message";
import PropTypes from "prop-types";

const Button = ({ onclick }) =>
        <button className="basic-button" onClick={() => onclick()}>SEND
        </button>;

Button.propTypes = {
    onclick: PropTypes.func,
};

export default Button;
