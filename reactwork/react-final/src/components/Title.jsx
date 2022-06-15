import React from 'react';
import '../App.css';
import titleimg from '../image/K-055.png';
import {NavLink} from 'react-router-dom';

// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';

export default function Title() {
  return (
    <>
      <NavLink to='/'/>
      <img src={titleimg} alt='' style={{height:'150px'}}/>
      <i style={{fontSize:'20px', color:'yellowgreen'}}>React/Spring Boot Project</i>
    </>
  );
}
