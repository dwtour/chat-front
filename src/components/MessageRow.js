import React from 'react';
import PropTypes from 'prop-types';

const MessageRow = ({direction, author, message }) =>
    <div className={direction === 'from' ? "message-from" : "message-to"}>
    <p className="text">{author+': '+message}</p>
  </div>;

MessageRow.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default MessageRow;
