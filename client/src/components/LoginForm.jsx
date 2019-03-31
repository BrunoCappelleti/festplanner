import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './Header';

class LoginForm extends Component {

  render() {
    return(
      <div>
      <Header/>

      <div className="LoginForm">

      <div className='loginDiv'>
        <div className="text-login">
          <h1 className="login">Log in</h1>

          <p className="new-account">or <Link to='/register'>sign up for a new account</Link></p>
        </div>

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
        <div className='registerIntro'>
          <h2 className='introTitle' >Never miss a deadline or detail, with FestPlanner</h2>
          <p className='pargIntro'>FestPlanner helps you plan and attned festivals by keeping all the important information in one place.</p>
          <button className="startBtn"
          onClick={() => this.props.history.push('/register')}>Start planning </button>
        </div>
      </div>

      <div className='aboutTodo'>
      <img className='todoimg' src={'https://i.imgur.com/KXsPybf.png'} alt='' />
      <div className='todoText'>
      <h2 className='todoTitle'>Your To-Do List</h2>
      <p className='neverforget'>Never forget your sunglasses, rainboots, or the last day to buy a ticket. Use the to-do list to send yourself alerts and reminders of everything going on so you don't have to worry about it.</p>
      </div>
      </div>


    </div>
    )
  }
};

export default withRouter (LoginForm);
