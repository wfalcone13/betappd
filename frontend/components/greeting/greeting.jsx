import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) =>{
  const sessionLinks = () => {
    return(
      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/create">Create An Account</Link>

      </nav>
    )
  }


  const personalGreeting = () => {
    return(
      <div>
        <p>{currentUser.first_name}</p>
      </div>
    )
  }
  
  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks())
}

export default Greeting