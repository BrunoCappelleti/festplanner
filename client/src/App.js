import React, { Component } from 'react';
import { Link ,Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import axios from 'axios';
import FestivalPage from './components/FestivalPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { registerUser, loginUser } from './services/api-helper';

class App extends Component {
  constructor(){
    super()

    this.state = {
      focuseTab: {
        all:[]
      },
    loginData: {
      user_email: '',
      password: ''
    },
    registerFormData: {
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      password: ''
    }
  }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.onClick = this.onClick.bind(this)

}

onClick(){
  console.log('click');
  this.props.history.push(`/register`);
}


  handleChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      },
      loginData: {
        [name]: value
      }
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const data = await registerUser(this.state.registerFormData)
    this.setState({
      registerFormData: {
        user_first_name: '',
        user_last_name: '',
        user_email: '',
        password: ''
      }
    })
    this.props.history.push(`/festival`);
  };

  async handleLogin(e) {
    e.preventDefault();
    const data = await loginUser(this.state.loginData)
    this.setState({
      loginData:{
        user_email: '',
        password:''
      }
    })
    this.props.history.push(`/festival`);
  };

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={(props) => (
        <div>
        <LoginForm
        {...props}
        handleChange={this.handleChange}
        handleSubmit={this.handleLogin}
        onSubmit={this.handleLogin}
        email={this.state.loginData.email}
        password={this.state.loginData.password}
        onClick={this.onClick}
        />
        </div>
      )} />

      <Route exact path='/register' render={(props) => (
        <div>
        <RegisterForm
        {...props}
        handleChange={this.handleChange}
        handleSubmit={this.handleRegister}
        first_name={this.state.registerFormData.first_name}
        last_name={this.state.registerFormData.last_name}
        email={this.state.registerFormData.email}
        password={this.state.registerFormData.password}
        />
        </div>
      )} />

      <Route exact path='/festival' component={FestivalPage} />

      </div>
    );
  }
}

export default withRouter (App);
