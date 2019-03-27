import React, { Component } from 'react';
import {Link ,Route } from 'react-router-dom';
import ToDoListItems from './ToDoListItems';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      allTasks: [{ task: 'milk', status: "to-do", id: 1 },
        { task: 'eggs', status: "to-do", id: 2 },
        { task: 'cheese', status: "in-progress", id: 3 },
        { task: 'meat', status: "in-progress", id: 4 },
        { task: 'fruit', status: "done", id: 5 },
        { task: 'vegies', status: "done", id: 6 },
        { task: 'juice', status: "done", id: 7 },
        { task: 'milk', status: "to-do", id: 8 },
        { task: 'eggs', status: "to-do", id: 9 },
        { task: 'cheese', status: "in-progress", id: 10 },
        { task: 'meat', status: "in-progress", id: 11 },
        { task: 'fruit', status: "done", id: 12 },
        { task: 'vegies', status: "done", id: 13 },
        { task: 'juice', status: "done", id: 14 },
        { task: 'milk', status: "to-do", id: 15 },
        { task: 'eggs', status: "to-do", id: 16 },
        { task: 'cheese', status: "in-progress", id: 17 },
        { task: 'meat', status: "in-progress", id: 18 },
        { task: 'fruit', status: "done", id: 19 },
        { task: 'vegies', status: "done", id: 20 },
        { task: 'juice', status: "done", id: 21 },
      ],
      renderTasks: [],
      renderTab: 'all',
    };
    this.changeTab = this.changeTab.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount(){
    //this should set the state will all list items
    this.setState((prevState) => ({
      renderTasks: prevState.allTasks
    }));
  }

  changeTab(category) {
    const allTasks = this.state.allTasks;
    const focusedTasks = category === 'all' ? allTasks : allTasks.filter( el => el.status === category)
    this.setState({
      renderTab: category,
      renderTasks: focusedTasks,
    });
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
    console.log(this.state.todos);
    return (
      <div className="ToDoList">
        <div className="to-do-list">
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
                this.changeTab('to-do');
              }}>To-Do
            </button>
            <button
              className={this.state.renderTab === "in-progress" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
              onClick={(ev) => {
                ev.preventDefault();
                this.changeTab('in-progress');
              }}>In-Progress
            </button>
            <button
              className={this.state.renderTab === "done" ? "to-do-tabs-button-focused" : "to-do-tabs-button"}
              onClick={(ev) => {
                ev.preventDefault();
                this.changeTab('done');
              }}>Done
            </button>
          </div>
          <ToDoListItems
          renderTasks={this.state.renderTasks}
          deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default ToDoList;
