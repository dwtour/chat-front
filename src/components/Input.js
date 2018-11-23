import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import { setInput } from '../actions';

const Input = props =>
    <input
      type="text"
      className="message-wrapper"
      id="input"
      onChange={(e) => {
        props.save(e.target.value);
      }}
      value={props.inputData}
    />;

Input.propTypes = {
  inputData: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

compose(
  connect(),
  withState('prop', 'setProp', 'initialValue'),
  lifecycle({
    componentDidMount() {
    },
  }),
)(Input);

export default Input;
