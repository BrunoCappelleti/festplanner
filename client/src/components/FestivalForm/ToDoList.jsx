import React, { Component } from 'react';
import ToDoListItems from './ToDoListItems';
import TaskForm from './TaskForm';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      allTasks: [{ task_title: 'Buy Tickets', task_status: "To-Do", task_date: new Date("Jan 5, 2021 15:27:25"), task_notes: 'heyheyhey', id: 1 },
        { task_title: 'Get sunglasses', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 2 },
        { task_title: 'Buy sunscreen', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey', id: 3 },
        { task_title: 'Get a super cool hat', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 4 },
        { task_title: 'Tell my friends I am going', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 5 },
        { task_title: 'Get new memory stick for camera', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey', id: 6 },
        { task_title: 'Aquire body-glitter', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey', id: 7 },
        { task_title: 'Pack water', task_status: "Done", task_date: new Date(), task_notes: 'yessssss', id: 8 },
        { task_title: 'Dont forget tooth brush', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey', id: 9 },
        { task_title: 'Last Task!', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey', id: 10 },
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
    if(ev){
       ev.preventDefault();
     }
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }))
  }

  async createTask(newTask) {
    // const { task_title, task_date, task_notes, task_status } = newTask
    try {
      await this.setState( prevState => ({
        // axios call to create from apiHelper
        allTasks: [...prevState.allTasks, newTask]
      }));
      console.log(newTask);
      this.changeTab(this.state.renderTab);
      this.toggleCreateForm();
    } catch(e) {
      console.log(e)
    }
  }

  async updateTask(updatedTask, id) {
    // const { task_title, task_date, task_notes, task_status } = updatedTask
    try {
      console.log('You update', updatedTask);
      const allTasks = this.state.allTasks
      const updatedTasks = allTasks.map( el => {
        if(el.id === id){
          return updatedTask
        } else {
          return el
        }
      });
      console.log(updatedTasks)
      await this.setState({
        allTasks: updatedTasks
      });
      this.changeTab(this.state.renderTab);
      this.toggleCreateForm();
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

  render() {
    return (
      <div className="to-do-list">
        <div className="todo-newtaskbtt">
          <h1 className='todoTiltle'>To Do List</h1>
          {this.state.showForm &&
            <TaskForm
              showForm={this.toggleCreateForm}
              focusedTask={this.state.focusedTask}
              createTask={this.createTask}
              updateTask={this.updateTask} />}
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
            className={this.state.renderTab === "to-do" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('To-Do');
            }}>TO DO
          </button>
          <button
            className={this.state.renderTab === "in-progress" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
            onClick={(ev) => {
              ev.preventDefault();
              this.changeTab('In-Progress');
            }}>IN PROGRESS
          </button>
          <button
            className={this.state.renderTab === "done" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
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
