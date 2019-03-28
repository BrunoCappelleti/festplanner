import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends Component {

  render() {
    return(
      <div className="LoginForm">
        <div className="text-login">
          <h1 className="login">Log in</h1>

          <p className="new-account">or <Link to='/register'>sign up for a new account</Link></p>
        </div>

        <div>
          <form className="form-login" onSubmit={this.props.onSubmit}>
            <input className="login-input"
            autoComplete="off"
            type="text"
            onChange={this.props.handleChange}
            id="email"
            name="user_email"
            value={this.props.email}
            placeholder="Email"/>
            <input className="login-input"
            autoComplete="off"
            type="password"
            onChange={this.props.handleChange}
            id="password"
            name="password"
            value={this.props.password}
            placeholder="Password"/>
            <button
            className='login-button'
            onClick={this.props.handleSubmit}
            type="submit">
            Log in
            </button>
            </form>


        </div>
      </div>
    )
  }
};

export default withRouter (LoginForm);
