import React, { Component } from 'react';
import { Link ,Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import axios from 'axios';
import FestivalPage from './components/FestivalPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/FestivalForm/Footer';
import { registerUser, loginUser } from './services/api-helper';

class App extends Component {
  constructor(){
    super()

    this.state = {
      focuseTab: {
        all:[]
      },
    formData: {
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      password: ''
    }
  }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
}

  handleChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
    formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const data = await registerUser(this.state.formData)


    
    this.setState({
      formData: {
        user_first_name: '',
        user_last_name: '',
        user_email: '',
        password: ''
      }
    })
    console.log("hi");
    this.props.history.push(`/festival`);
  };

  async handleLogin(e) {
    e.preventDefault();
    const data = await loginUser(this.state.formData)
    this.setState({
      formData: {
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
        email={this.state.formData.email}
        password={this.state.formData.password}
        />
        </div>
      )} />

      <Route exact path='/register' render={(props) => (
        <div>
        <RegisterForm
        {...props}
        handleChange={this.handleChange}
        handleSubmit={this.handleRegister}
        first_name={this.state.formData.first_name}
        last_name={this.state.formData.last_name}
        email={this.state.formData.email}
        password={this.state.formData.password}
        />
        </div>
      )} />
      <Footer />
      <Route exact path='/festival' render={FestivalPage} />
      </div>
    );
  }
}

export default withRouter (App);
