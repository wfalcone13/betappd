import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e =>this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if(this.props.formType === 'signup'){
      this.props.signup(user)
    } else {
      this.props.login(user)
    }
  }

  render(){
    if (this.props.formType === 'signup'){
      return(
      <div>
        <form action="">
          <input type="text" name="email" className="" placeholder="email"/>
          <input type="text" name="username" className="" placeholder="username" />
          <input type="text" name="first_name" className="" placeholder="first name" />
          <input type="text" name="last_name" className="" placeholder="last name" />
          <input type="password" name="password" className="" placeholder="password" />

          <input type="submit" value="signup" id=""/>
        </form>
      </div>
      )
    }  else {
      this.props.formType === 'login'
      return(
      <div>
        <form action="">
          <input type="text" name="username" className="" placeholder="username" />
          <input type="password" name="password" className="" placeholder="password" />

          <input type="submit" value="signin" id="" />
        </form>
      </div>
      )
    }
  }

}

export default SessionForm;