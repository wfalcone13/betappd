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
      this.props.signup(user).then(() => {
        this.props.history.push(`home`)
      })
    } else {
      this.props.login(user).then(() => {
        this.props.history.push(`home`)
      })
    }
  }

  render(){
    if (this.props.formType === 'signup'){
      return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" className="" placeholder="email" value={this.state.email} onChange={this.update('email')}/>
            <input type="text" className="" placeholder="username" value={this.state.username} onChange={this.update('username')}/>
            <input type="text" className="" placeholder="first name" value={this.state.first_name} onChange={this.update('first_name')}/>
            <input type="text" className="" placeholder="last name" value={this.state.last_name} onChange={this.update('last_name')} />
            <input type="password" className="" placeholder="password" value={this.state.password} onChange={this.update('password')}/>

            <input type="submit" value={this.props.formType} value="Create Account" id=""/>
        </form>
      </div>
      )
    }  else {
      this.props.formType === 'login'
      return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" className="" placeholder="username" value={this.state.username} onChange={this.update('username')}/>
            <input type="password" className="" placeholder="password" value={this.state.password} onChange={this.update('password')}/>

          <input type="submit" value={this.props.formType} value="signin" id="" />
        </form>
      </div>
      )
    }
  }

}

export default withRouter(SessionForm);