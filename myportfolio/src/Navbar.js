import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';
const Navbar= ()=> {
  return (
    <nav className='navbar navbar-expand-1g navbar-mainbg'>
        <NavLink className='navbar-brand navbar-logo' exact>
            Hello
        </NavLink>


    </nav>
  )
}

export default Navbar;