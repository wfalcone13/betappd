import {connect} from 'react-redux';
import React from 'react';
import {signup, login} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) =>{
  return{
    errors: errors.session,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)