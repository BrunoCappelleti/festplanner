import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import ToDoList from './FestivalForm/ToDoList';

function Nav(props){

  return (
    <div className='nav'>
    <img src={"https://i.imgur.com/5tV6auM.png"} alt='logo' className='logo'/>
    <div className='links'>
    
    <Link className='todoLink' onClick={props.handleScroll} to='/todo'>To Do List </Link>
    <Route path='/todo' render={() => <h1 className='todoTiltle'>To Do List</h1>} />
    <a className='logoutLink' href=''>Logout</a>
    </div>
    </div>
  )
}
  export default Nav
