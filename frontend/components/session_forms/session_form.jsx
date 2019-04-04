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

  }

}