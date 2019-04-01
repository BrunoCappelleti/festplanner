import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='header'>
    <img src={"https://i.imgur.com/5tV6auM.png"} alt='logo' className='logo'/>
    <Link to='/' className='logout'>Login</Link>
    </div>
  )
}
  export default Header
