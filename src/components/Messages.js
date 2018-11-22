import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import MessageRow from './MessageRow';

const Messages = withState('messages')(({ messages }) =>
    <div className="message">
     {messages.map(message => (
       <MessageRow
                message={message.message}
                author={message.author}
                direction={message.direction}
       />
      ))}
    </div>);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
});

export default compose(
  connect(
    mapStateToProps,
  ),
  withState,
)(Messages);
