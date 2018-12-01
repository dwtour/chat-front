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

export const saveInput = input => ({
  type: types.SAVE_INPUT,
  input,
});

export const setToken = token => ({
  type: types.SET_TOKEN,
  token,
});

export const setUsername = name => ({
  type: types.SET_USERNAME,
  name,
});
