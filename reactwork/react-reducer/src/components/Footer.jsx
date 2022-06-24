import React from 'react';
import { useContext } from 'react';
import '../App___.css';
import { ThemeContext } from '../context/ThemeContext';

// const Footer = ({isDark, setIsDark}) => {
const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  return (
    <footer className='footer' style={{backgroundColor:isDark?'black':'lightgray'}}>
      <button type='button' className='button'
        onClick={()=>{
          setIsDark(!isDark)
        }}>Dark Mode</button>
    </footer>
  );
};

export default Footer;