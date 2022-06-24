import React from 'react';
import { useContext } from 'react';
import '../App___.css';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

// const Content = ({isDark}) => {
const Content = () => {
  const name=useContext(UserContext);    
  const {isDark} = useContext(ThemeContext);
  return (
    <div className='content' style={{backgroundColor:isDark?'gray':'white'}}>
      <p>{name} 님... 즐거운 하루 되세요!!!</p>
    </div>
  );
};

export default Content;