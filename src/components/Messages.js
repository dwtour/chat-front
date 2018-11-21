import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageRow from './MessageRow';

const Messages = props =>
    <div className="message">
     {props.messages.map(message => (
       <MessageRow
                message={message.message}
                author={message.author}
                direction={message.direction}
       />
      ))}
    </div>;

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


export default connect(state => ({ messages: state.messages }), {})(Messages);
