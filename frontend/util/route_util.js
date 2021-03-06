import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//if logged in - cant access /, /login, /signup


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (

 

    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/home" />
      )
  )} 
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

export const LoggedAuthRoute = withRouter(connect(mapStateToProps)(Auth));
