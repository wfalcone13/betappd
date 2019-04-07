import React from 'react';
import { Route, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import loginFormContainer from './session_forms/login_form_container';
import signUpFormContainer from './session_forms/signup_form_container';
import SessionLinks from './greeting/splash'
import Home from './greeting/home'
import { LoggedAuthRoute } from '../util/route_util';
import { AuthRoute} from '../util/auth_route_util'

//setup in login/create - those should be public but if user is identified redirect to home



const App = () =>(
  <div>
    <header>
      {/* <Link to="/"><h1>BeTappd</h1></Link> */}

      <GreetingContainer/>
    </header>
    <Route exact path='/home'component ={Home}/>
    <Route exact path='/' component={SessionLinks}/>
    <Route exact path='/login' component={loginFormContainer}/>
    <Route exact path='/create' component={signUpFormContainer} />


  </div>
)

export default App;