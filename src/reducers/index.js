import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return state.concat([{
        message: action.message,
        author: action.author,
        direction: action.direction,
      }]);

    case types.SEND_CLIENT_MESSAGE:
      return state.concat([{
        message: action.text,
        author: 'You',
        direction: 'to',
      }]);
    default:
      return state;
  }
};

const inputHandlerFlag = (state = false, action) => {
  switch (action.type) {
    case types.SET_INPUT_HANDLER_FLAG:
      return action.value;
    default: return state;
  }
};

const rootReducer = combineReducers({
  messages,
  inputHandlerFlag,
  routing,
});

export default rootReducer;
