import React from 'react';

const Button = ({submitMessage}) =>
        <button className="basic-button" onClick={() => submitMessage()}>SEND
        </button>;

export default Button;
