import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';
import { connect } from 'react-redux';

const MessageRow = withState('message')(({ message, author, direction }) =>
    <div className={direction === 'from' ? 'message-from' : 'message-to'}>
    <p className="text">{`${author}:  ${message}`}</p>
    </div>);

MessageRow.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default compose(
  withState,
)(MessageRow);
