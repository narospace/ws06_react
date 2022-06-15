import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <ul className='menu'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/member/form'>Member</NavLink></li>
        <li><NavLink to='/shop/list'>Shop</NavLink></li>
        <li><NavLink to='/board/list'>Board</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </>
  );
}