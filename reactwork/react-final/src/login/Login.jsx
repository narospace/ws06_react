import React from 'react';
import '../App.css';
import LoginForm  from './LoginForm';
import Logout from './Logout';

export default function Login() {
  let loginok = localStorage.loginok;

  return (
    <>
      {
        loginok==null ? <LoginForm/> : <Logout/>
      }
    </>
  );
}