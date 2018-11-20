import * as types from './types';

export const addMessage = (direction, author, message) => ({
  type: types.ADD_MESSAGE,
  direction,
  author,
  message,
});

export const sendClientMessage = text => ({
  type: types.SEND_CLIENT_MESSAGE,
  text,
});

export const setInputHandlerFlag = value => ({
  type: types.SET_INPUT_HANDLER_FLAG,
  value,
});
