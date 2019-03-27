import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends Component {

  render() {
    return(
      <div className="login">
        <h1>Log in</h1>

        <a href="#" onClick={this.props.onClick}>or sign up for a new account</a>

        <form onSubmit={this.props.onSubmit}>
          <input className="login-email"
          autoComplete="off"
          type="text"
          onChange={this.props.handleChange}
          id="email"
          name="user_email"
          value={this.props.email}
          placeholder="Email"/>
          <input className="login-psw"
          autoComplete="off"
          type="password"
          onChange={this.props.handleChange}
          id="password"
          name="password"
          value={this.props.password}
          placeholder="Password"/>
          </form>

        <button
        className='button-login'
        onClick={this.props.handleSubmit}
        type="submit">
        Log in
        </button>
      </div>
    )
  }
};

export default withRouter (LoginForm);
