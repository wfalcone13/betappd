import React from 'react';
import ReactDOM from 'react-dom'
import {signup, logout, login} from '../frontend/util/session_api_util'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () =>{

  const store =  configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login
  window.logout = logout 
  window.signup = signup
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi BeTappd</h1>, root)
})