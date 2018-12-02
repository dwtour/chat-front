import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const inputData = (state = '', action) => {
  switch (action.type) {
    case types.SAVE_INPUT:
      return action.input;
    default:
      return state;
  }
};

const user = (state = { name: '', token: '' }, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        name: state.name,
        token: action.token,
      };
    case types.SET_USERNAME:
      return {
        name: action.name,
        token: state.token,
      };
    default:
      return state;
  }
};

const channelToken = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  channelToken,
  inputData,
  routing,
});

export default rootReducer;
