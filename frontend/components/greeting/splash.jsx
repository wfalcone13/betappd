import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

///Show this for "/"


//show sign out on home! must be logged in


class SessionLinks extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user 
  }

render(){
   {
  return (

    <div className="main-div">
      <div>
        <button><Link to="/login">Sign In</Link></button>
        <button><Link to="/create">Create An Account</Link></button>
      </div>
      <div>

      </div>
    </div>

  ) 
  
  }
}
}

// const mapStateToProps = state =>{
//   return{
//   user: state.session.id
//   }
// }


// //export default SessionLinks
// export default connect(mapStateToProps)(SessionLinks)

export default SessionLinks