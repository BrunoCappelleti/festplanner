import React, { Component } from 'react';
import Calendar from 'react-calendar';

class TaskForm extends Component {
  constructor() {
    super()
    this.state = {
      taskForm: {
        task_title: '',
        //check datatype being returned from calendar
        task_date: new Date(),
        task_notes: '',
        task_status: 'to-do',
      },
      creating: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCalandar = this.handleCalandar.bind(this);
  }

  componentDidMount() {
    const focusedTask = this.props.focusedTask
    if(focusedTask) {
      this.setState({
        creating: false,
        taskForm: {
          task_title: focusedTask.task_title,
          task_date: focusedTask.task_date,
          task_notes: focusedTask.task_notes,
          task_status: focusedTask.task_status,
        }
      })
    }
  }

  handleChange(ev) {
    const { name, value } = ev.target
    this.setState( prevState => ({
      taskForm: {
        ...prevState.taskForm,
        [name]: value,
      }
    }))
  }

  handleCalandar(date) {
    this.setState(prevState => ({
      taskForm: {
        ...prevState.taskForm,
        task_date: date,
      }
    }))
  }

  render() {
    const {task_title, task_date, task_notes, task_status} = this.state.taskForm
    const { creating } = this.state
    return (
      <div>
        <button onClick={this.props.showForm}>Back</button>
        <h1>{creating ? 'Add a new Task' : 'Update your Task'}</h1>
        <form onSubmit={(ev) => {
          ev.preventDefault();
          creating ? this.props.createTask(this.state.taskForm) : this.props.updateTask(this.state.taskForm)}}>
          <label>Task Title: </label>
          <input
            type="text"
            value={task_title}
            name="task_title"
            onChange={this.handleChange} />
          <label>Task status: </label>
          <select
            name="task_status"
            onChange={this.handleChange}>
            <option value="To-Do">To-do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <label>Task Notes: </label>
          <input
            type="text"
            value={task_notes}
            name="task_notes"
            onChange={this.handleChange} />
          <Calendar
            value={task_date}
            onChange={this.handleCalandar} />
          <input
            type="submit"
            value="Create a new Task" />
        </form>
      </div>
    )
  }
}

export default TaskForm