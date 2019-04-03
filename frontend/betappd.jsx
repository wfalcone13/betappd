import React from 'react';
import ReactDOM from 'react-dom'
import {signup, logout, login} from '../frontend/util/session_api_util'

document.addEventListener('DOMContentLoaded', () =>{
  window.login = login
  window.logout = logout 
  window.signup = signup
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi BeTappd</h1>, root)
})