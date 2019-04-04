import {connect} from 'react-redux';
import React from 'react';
import {login, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login',
    signup: signup
  }
}

const mapDistpatchToProps = (dispatch) => {
  return{
    login: (user) => dispatch(login(user)),
    //demoLog: () => dispatch(login)

  }
}

export default connect(mapStateToProp, mapDistpatchToProps)(SessionForm);