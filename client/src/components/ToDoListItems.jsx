import React, { Component } from 'react';

const ToDoListItems = (props) => {
  const { renderTasks } = props
  return (
    <div className='to-do-tasks'>
    {renderTasks.map(el => (
      <div className="task">
        <div>{el.task}</div>
        <div>{el.status}</div>
        <div className="task-delete"
          onClick={(ev) => {
          ev.preventDefault();
          props.deleteTask(el.id)
        }}>X</div>
      </div>
    ))}
    </div>
  )
}

export default ToDoListItems
