import React from 'react';
import { Route, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import loginFormContainer from './session_forms/login_form_container';
import signUpFormContainer from './session_forms/signup_form_container';
import SessionLinks from './greeting/splash'
import { AuthRoute } from '../util/route_util';

//setup in login/create - those should be public but if user is identified redirect to home

const App = () =>(
  <div>
    <header>
      {/* <Link to="/"><h1>BeTappd</h1></Link> */}

      {/* <AuthRoute component ={GreetingContainer}/> */}
    </header>
    <Route path='/' component={SessionLinks}/>
    <Route exact path='/login' component={loginFormContainer}/>
    <Route exact path='/create' component={signUpFormContainer} />
    <AuthRoute exact path='/home'component ={GreetingContainer}/>


  </div>
)

export default App;