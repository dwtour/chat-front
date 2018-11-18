import React from 'react';
import PropTypes from 'prop-types';
import MessageRow from './MessageRow';


const Messages = ({ messages }) => {
  return (
    <div className="message">

     {messages.map(message => (
       <MessageRow
                message={message.message}
                author={message.author}
                direction={message.direction}
       />
      ))}
    </div>);
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
export default Messages;
