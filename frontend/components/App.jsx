import React from 'react';
import { Route, Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import loginFormContainer from './session_forms/login_form_container';
import signUpFormContainer from './session_forms/signup_form_container';
import SessionLinks from './greeting/splash'

const App = () =>(
  <div>
    <header>
      {/* <Link to="/"><h1>BeTappd</h1></Link> */}

      <GreetingContainer/>
    </header>
    <Route path='/' component={SessionLinks}/>
    <Route path='/login' component={loginFormContainer}/>
    <Route path='/create' component={signUpFormContainer} />

  </div>
)

export default App;