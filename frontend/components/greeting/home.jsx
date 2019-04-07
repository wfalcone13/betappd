import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

///Show this for "/"


//show sign out on home! must be logged in


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
  }

  render() {
    {
      return (

        <div>
          <h1>Logged In!</h1>
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

export default Home