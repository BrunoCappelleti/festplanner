import React, { Component } from 'react';
import {Link ,Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos: res.data
    }))
  }

  toggleComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
        todos: [...this.state.todos.filter(todo =>todo.id
        !==id)] }));
    }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
      })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data] }));
      }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="cointainer">
          <Header />
          <Route path="/" render={props => (
            <div>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}/>
            </div>
          )} />
        </div>
      </div>
    );
  }
}

export default App;
