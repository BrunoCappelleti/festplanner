import React from 'react';

function TodoHeader() {
  return(
    <header style={headerstyle}>
      <h1>Todo List</h1>
    </header>
  )
}


const headerstyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default TodoHeader
