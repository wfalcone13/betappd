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
        <div className="sign-links">
        {/* <button className='link-login'><Link to="/login">Sign In</Link></button> */}
        {/* <button className='link-create'><Link to="/create" >Create An Account</Link></button> */}
        <Link to="/login" className='link-login'>SIGN IN</Link>
        <Link to="/create" className='link-create' >CREATE AN ACCOUNT</Link>
        </div>
        <div>
          <div>
            <p1>placeholder</p1>
          </div>
          <div className='phone-img'>
          
          </div>
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