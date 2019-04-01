import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import FestivalPage from './components/FestivalPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { registerUser, loginUser } from './services/api-helper';

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: '',
      token: '',
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
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMounter() {
    //needs to check for token existance and instatiate user and token if so
    //possibly route directly to festival page if you're already logged in
  }

  handleLogout(e) {
  e.preventDefault();
  this.setState({
    user: '',
    token: '',
    formData: {
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      password: ''
    }
  })
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

  async handleRegister(ev) {
    ev.preventDefault();
    const { user_first_name, user_last_name, user_email, password } = this.state.formData
    if ( user_first_name && user_last_name && user_email && password ) {
      try {
        const data = await registerUser(this.state.formData);
        console.log(data);
        this.setState({
          user: data.user,
          token: data.token,
          formData: {
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            password: ''
          }
        })
        this.props.history.push(`/festival`);
      } catch (e) {
        console.log(e, 'Something went wrong...');
      }
    } else {
      console.log('please fill out form');
      // logic works to not allow partially filled out forms to dispatch server call
      // need to know conditional render "please fill out form" as html if failure
    }
  };

  async handleLogin(ev) {
    ev.preventDefault();
    const { user_email, password } = this.state.formData;
    if (user_email && password) {
      try {
        const resp = await loginUser(this.state.formData)
        if(resp) {
          console.log(resp);
          this.setState({
            user: resp.user,
            token: resp.token,
            formData: {
              user_email: '',
              password:''
            }
          })
          this.props.history.push(`/festival`);
        } else {
          console.log('wrong username or password');
          // this needs user prompt so they can understand why login failed
        }
      } catch(e) {
        console.log(e, 'Someting went wrong...');
      }
    } else {
      console.log('please put both a username and password');
    };
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
          password={this.state.formData.password} />
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
          password={this.state.formData.password} />
        </div>
      )} />
      <Route exact path='/festival' component={(props) => (
        <FestivalPage
          handleLogout={this.handleLogout}
          user={this.state.user} />
        )} />
      </div>
    );
  }
}

export default withRouter (App);
