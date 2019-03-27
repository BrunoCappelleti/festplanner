import React, { Component } from 'react';
import {Link ,Route } from 'react-router-dom';
import ToDoListItems from './ToDoListItems';
import TaskForm from './TaskForm';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      allTasks: [{ task_title: 'test', task_status: "To-Do", task_date: new Date("Jan 5, 2021 15:27:25"), task_notes: 'heyheyhey', id: 1 },
        { task_title: 'yes', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 2 },
        { task_title: 'this works', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey', id: 3 },
        { task_title: 'for sure', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 4 },
        { task_title: 'test', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 5 },
        { task_title: 'test', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey', id: 6 },
        { task_title: 'test', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey', id: 7 },
        { task_title: 'good job', task_status: "Done", task_date: new Date(), task_notes: 'yessssss', id: 8 },
        { task_title: 'test', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey', id: 9 },
        { task_title: 'test', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 10 },
      ],
      renderTasks: [],
      renderTab: 'all',
      showForm: false,
      focusedTask: '',
    };
    this.changeTab = this.changeTab.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleCreateForm = this.toggleCreateForm.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  componentDidMount(){
    //this should set the state will all list items
    this.setState((prevState) => ({
      renderTasks: prevState.allTasks
    }));
  }

  changeTab(category) {
    const allTasks = this.state.allTasks;
    const focusedTasks = category === 'all' ? allTasks : allTasks.filter( el => el.task_status === category)
    this.setState({
      renderTab: category,
      renderTasks: focusedTasks,
    });
  }

  toggleEditForm(task) {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
      focusedTask: task,
    }))
  }

  toggleCreateForm(ev) {
    ev.preventDefault();
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }))
  }

  async createTask(newTask) {
    const { task_title, task_date, task_notes, task_status } = newTask
    try {
      console.log(newTask);
      // axios call to create from apiHelper
    } catch(e) {
      console.log(e)
    }
  }

  async updateTask(updatedTask) {
    const { task_title, task_date, task_notes, task_status } = updatedTask
    try {
      console.log(updatedTask, 'You updated!');
      // axios call to update from apiHelper
    } catch(e) {
      console.log(e)
    }
  }

  async deleteTask(id) {
    //delete from database
    const allTasks = this.state.allTasks
    const newTasks = allTasks.filter(el => el.id !== id);
    await this.setState({
      allTasks: newTasks
    });
    this.changeTab(this.state.renderTab);
  }

  // this feature needs to be added
  // toggleComplete = (id) => {
  //   console.log(id);
  //   this.setState({
  //     todos: this.state.todos.map(todo => {
  //       if(todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo;
  //     })
  //   })
  // }

  render() {
    return (
      <div className="to-do-list">
        {this.state.showForm &&
          <TaskForm
            showForm={this.toggleCreateForm}
            focusedTask={this.state.focusedTask}
            createTask={this.createTask}
            updateTask={this.updateTask} />}
        {!this.state.showForm && <button onClick={this.toggleCreateForm}>Make new task</button>}
        <div className="to-do-tabs">
          <button
            className={this.state.renderTab === "all" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('all');
            }}>All
          </button>
          <button
            className={this.state.renderTab === "to-do" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('To-Do');
            }}>To-Do
          </button>
          <button
            className={this.state.renderTab === "in-progress" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('In-Progress');
            }}>In-Progress
          </button>
          <button
            className={this.state.renderTab === "done" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('Done');
            }}>Done
          </button>
        </div>
        <ToDoListItems
        renderTasks={this.state.renderTasks}
        deleteTask={this.deleteTask}
        toggleEditForm={this.toggleEditForm} />
      </div>
    );
  }
}

export default ToDoList;
