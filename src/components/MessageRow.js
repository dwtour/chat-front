import React from 'react';
import PropTypes from 'prop-types';

const MessageRow = props =>
    <div className={props.direction === 'from' ? 'message-from' : 'message-to'}>
    <p className="text">{`${props.author}:  ${props.message}`}</p>
    </div>;

MessageRow.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default MessageRow;
