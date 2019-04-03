import React from 'react';
import ReactDOM from 'react-dom'
import {signup, logout, login} from '../frontend/util/session_api_util'
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () =>{

  const store =  configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login
  window.logout = logout 
  window.signup = signup

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})