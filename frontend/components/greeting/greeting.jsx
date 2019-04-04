import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) =>{
  // const sessionLinks = () => {
  //   return(
      
  //       <div>
  //         <div>
  //           <button><Link to="/login">Sign In</Link></button>
  //           <button><Link to="/create">Create An Account</Link></button>
  //         </div>
  //         <div>

  //         </div>
  //       </div>
     
  //   )
  // }

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
  
  return (currentUser ? personalGreeting(currentUser, logout) : null )
}

export default Greeting