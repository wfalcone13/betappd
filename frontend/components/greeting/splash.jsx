import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

///Show this for "/"


//show sign out on home!


class SessionLinks extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user 
  }

render(){
  if(this.state === null) {
  return (

    <div>
      <div>
        <button><Link to="/login">Sign In</Link></button>
        <button><Link to="/create">Create An Account</Link></button>
      </div>
      <div>

      </div>
    </div>

  ) 
  } else {
    return null
  }
  }
}

const mapStateToProps = state =>{
  debugger
  return{
  user: state.session.id
  }
}


//export default SessionLinks
export default connect(mapStateToProps)(SessionLinks)