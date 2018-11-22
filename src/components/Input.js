import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';

import { setInput } from '../actions';

const Input = withState('inputData', 'save', '')(({ inputData, save }) =>
    <input
      type="text"
      className="message-wrapper"
      id="input"
      onChange={(e) => {
        save(e.target.value);
      }}
      value={inputData}
    />);

Input.propTypes = {
  inputData: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  save: (input) => {
    dispatch(setInput(input));
  },
});

const mapStateToProps = state => ({
  inputData: state.inputData,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState,
)(Input);
