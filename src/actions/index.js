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

export const handleInput = input => ({
  type: types.HANDLE_INPUT,
  input,
});
