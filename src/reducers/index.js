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

const user = (state = '', action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return action.token;
    case types.SET_USERNAME:
      return action.username;
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
