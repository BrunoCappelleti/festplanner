import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import ToDoList from './FestivalForm/ToDoList';
import { HashLink as Link } from 'react-router-hash-link';

function Nav(props){

  return (
    <div className='nav'>
    <img src={"https://i.imgur.com/5tV6auM.png"} alt='logo' className='logo'/>
    <div className='links'>
    <Link className='logoutLink' onClick={props.handleLogout} to='/'>Logout</Link>
    </div>
    </div>
  )
}
  export default Nav



      /* <Link className='todoLink' onClick={props.handleScroll} to='/todo#test'>To Do List </Link>
       <Route path='/todo' render={() => <h1 id="test" className='todoTiltle'>To Do List</h1>} /> */
