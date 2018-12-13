import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded',() => {
  let store;
  if (window.demoUser) {
    console.log("made it through check");
    const user = {
      username: 'Demo Account',
      password: 'password'
    };
    APIUtil.login(user);
    delete window.demoUser;
  }
  console.log("past first if");
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
