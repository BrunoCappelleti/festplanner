import React, { Component } from 'react';

const ToDoListItems = (props) => {
  const { renderTasks, toggleEditForm } = props
  return (
    <div className='to-do-items'>
    {renderTasks.map((el, idx) => (
      <div key={idx} className="to-do-item">
        <div>{el.task_title}</div>
        <div>{el.task_status}</div>
        <div className="task-update-delete">
          <div className="task-update"
          onClick={(ev) => {
            ev.preventDefault();
            toggleEditForm(el);
          }}>Edit
          </div>
          <div className="task-delete"
            onClick={(ev) => {
            ev.preventDefault();
            props.deleteTask(el.id)
          }}>X
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default ToDoListItems
