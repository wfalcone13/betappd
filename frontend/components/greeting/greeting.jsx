import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) =>{
  const sessionLinks = () => {
    return(
      <nav>
        <div>
          <div>
            <Link to="/login">Sign In</Link>
            <Link to="/create">Create An Account</Link>
          </div>
          <div>

          </div>
        </div>
      </nav>
    )
  }

  //put profile component in here

  const personalGreeting = () => {
    return(
      <div>
        {/* <p>{currentUser.first_name}</p> */}
      
        <button onClick={logout}>
          Sign Out
        </button>
      </div>
    )
  }
  
  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks())
}

export default Greeting