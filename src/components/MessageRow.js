import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import ChatBox from '../containers/ChatBox';

const MessageRow = props =>
    <div className={props.direction === 'from' ? 'message-from' : 'message-to'}>
    <p className="text">{`${props.author}:  ${props.message}`}</p>
    </div>;

MessageRow.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

compose(
  connect(),
  withState('prop', 'setProp', 'initialValue'),
  lifecycle({
    componentDidMount() {
    },
  }),
)(ChatBox);

export default MessageRow;
