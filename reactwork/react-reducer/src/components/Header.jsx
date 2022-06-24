import React from 'react';
import { useContext } from 'react';
import '../App___.css';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';


// const Header = ({isDark}) => {
const Header = () => {
  const userName=useContext(UserContext);
  const {isDark}=useContext(ThemeContext);
  return (
    
    <header className='header' style={{backgroundColor:isDark?'black':'lightgray'}}>
        <h1>Welcome! {userName}님!</h1>
    </header>
  
  );
};

export default Header;