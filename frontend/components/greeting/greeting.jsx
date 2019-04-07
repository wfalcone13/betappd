import React from 'react';
import { withRouter, Link} from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props)
    this.currentUser = this.props.currentUser
  }


// let greeting = ({currentUser, logout}) =>{
   displayNothing(){
    return(
        <div className='nothing'>
     
        </div>
    )
  }

  logsOut(){
    this.props.logout
  }

  //put profile component in here

   personalGreeting(){
    return(
      <div>
        {/* <p>{currentUser.first_name}</p> */}
      
        <button onClick={this.props.logout}>
          Sign Out
        </button>
      </div>
    )
  }
  render(){

    if(this.currentUser){
      return (
        <div>{this.personalGreeting()}</div>
      )

    } else {
      return (
        <div>
          {this.displayNothing()}
        </div>
      )
    }
 

  }
}

export default withRouter(Greeting)