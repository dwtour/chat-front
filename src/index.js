import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

const initialState = {
  messages: [
  {
    message: 'join',
    direction: 'from',
    author: '#user1',
  },
  {
    message: 'leave',
    direction: 'from',
    author: '#user2',
  },
  {
    message: 'hello hello hello hello hello hello hello',
    direction: 'to',
    author: 'You',
  },
  {
    message: 'hello there',
    direction: 'from',
    author: '#user3',
  },
]};

const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
);
/*
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const newConfigureStore = require('./store/configureStore');
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={newStore} history={newHistory} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
} */
