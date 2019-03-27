import React, { Component } from 'react';
import { Link ,Route } from 'react-router-dom';
import Todos from './FestivalForm/Todos';
import TodoHeader from './FestivalForm/TodoHeader';
import AddTodo from './FestivalForm/AddTodo';
import Counter from './Counter';
import axios from 'axios';
import { getTasks, delTask, postTask } from '../services/api-helper';

class FestivalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  async componentDidMount(){
    const todos = await getTasks();
    this.setState({
      todos
    })
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

//it's weird that it didn't work with async and await here...
  delTodo = (id) => {
   delTask(id);
    this.setState({
        todos: [...this.state.todos.filter(todo =>todo.id
        !==id)] })
    }

  async addTodo(title){
    const resp = await postTask(title);
    this.setState(prevState => ({
        todos: [...prevState.todos, resp] }))
    }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="cointainer">
          <Counter />
          <TodoHeader />

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

export default FestivalPage;
