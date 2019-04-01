import React, { Component } from 'react';
import ToDoListItems from './ToDoListItems';
import TaskForm from './TaskForm';
import { getUserTasks, createUserTask, editUserTask, deleteUserTask } from '../../services/api-helper'

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      allTasks: [],
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
    this.editTask = this.editTask.bind(this);
  }

  async componentDidMount(){
    try {
      const allTasks = await getUserTasks(this.props.user.id);
      if (allTasks) {
        this.setState({
          allTasks,
          renderTasks: allTasks
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  changeTab(category) {
    const allTasks = this.state.allTasks;
    const focusedTasks = category === 'all' ? allTasks : allTasks.filter( el => el.task_status.toLowerCase() === category.toLowerCase())
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
    if(ev){
       ev.preventDefault();
     }
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }))
  }

  async createTask(task) {
    const { task_title, task_date, task_notes, task_status } = task
    if (task_title && task_date && task_notes && task_status) {
      try {
        const createdTask = await createUserTask(this.props.user.id, task);
        await this.setState( prevState => ({
          allTasks: [...prevState.allTasks, createdTask]
        }));
        this.changeTab(this.state.renderTab);
        this.toggleCreateForm();
      } catch(e) {
        console.log(e)
      }
    } else {
      console.log('please fill out form entirely');
    }
  }

  async editTask(task, id) {
    const { task_title, task_date, task_notes, task_status } = task
    if (task_title && task_date && task_notes && task_status) {
      try {
        const updatedTask = await editUserTask(this.props.user.id, id, task);
        if(updatedTask) {
          const allTasks = this.state.allTasks
          const updatedTasks = allTasks.map( el => {
            if(el.id === id){
              return updatedTask
            } else {
              return el
            }
          });
          await this.setState({
            allTasks: updatedTasks
          });
          this.changeTab(this.state.renderTab);
          this.toggleCreateForm();
        } else {
          console.log('something went wrong');
        }
      } catch(e) {
        console.log(e)
      }
    } else {
      console.log('pleae fill out form entirely');
    }
  }

  async deleteTask(id) {
    try {
      const resp = await deleteUserTask(this.props.id, id);
      console.log(resp);
      if(resp) {
        const allTasks = this.state.allTasks
        const newTasks = allTasks.filter(el => el.id !== id);
        await this.setState({
          allTasks: newTasks
        });
        this.changeTab(this.state.renderTab);
      } else {
        console.log('something went wrong');
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="to-do-list">
        <div className="todo-newtaskbtt">
          <h1 id="test" className='todoTiltle'>To Do List</h1>
          {this.state.showForm &&
            <TaskForm
              showForm={this.toggleCreateForm}
              focusedTask={this.state.focusedTask}
              createTask={this.createTask}
              editTask={this.editTask} />}
          {!this.state.showForm && <button className="make-new-task" onClick={this.toggleCreateForm}>Add new task</button>}
        </div>
        <div className="to-do-tabs">
          <button
            className={this.state.renderTab === "all" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('all');
            }}>ALL
          </button>
          <button
            className={this.state.renderTab === "To-Do" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('To-Do');
            }}>TO DO
          </button>
          <button
            className={this.state.renderTab === "In Progress" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('In Progress');
            }}>IN PROGRESS
          </button>
          <button
            className={this.state.renderTab === "Done" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('Done');
            }}>DONE
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
