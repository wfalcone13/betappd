import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) =>{


  //put profile component in here

  
    return(
      <div>
        
      
        <button onClick={logout}>
          Sign Out
        </button>
      </div>
    )
  
  
 
}

export default Greeting