import React from 'react';

const ToDoListItems = (props) => {
  const { renderTasks, toggleEditForm } = props
  return (
    <div className='to-do-items'>
    {renderTasks.map((el, idx) => (
      <div key={idx} className="to-do-item">
        <p className="task-title">{el.task_title}</p>
        <p className="task-status">{el.task_status}</p>
        <div className="task-update-delete">
          <div className="task-update"
          onClick={(ev) => {
            ev.preventDefault();
            toggleEditForm(el);
          }}><p className="edit-button">Edit</p>
          </div>
          <div className="task-delete"
            onClick={(ev) => {
            ev.preventDefault();
            props.deleteTask(el.id)
          }}><p className="delete-button">X</p>
          </div>
        </div>
      </div>
    ))}
    <hr/>
    </div>
  )
}

export default ToDoListItems
