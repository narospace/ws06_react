import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// import { useNavigate } from 'react-router-dom';

export default function Logout() {
  let id = localStorage.myid;
  const url = process.env.REACT_APP_SPRING_URL + "member/name?id=" + id;
  const [loginName, setLoginName] = useState('');
  // const navi = useNavigate();

  const userName=()=>{
    axios.get(url)
    .then(res=>{
      setLoginName(res.data);
    })
  }

  useEffect(()=>{
    userName();
  }, []);

  return (
    <>
      <h3>환영합니다. {loginName} 님
        <button type='button' className='btn btn-warning' style={{marginLeft:'10px'}}
        onClick={()=>{
          localStorage.clear();
          
          // 새로고침
          window.location.reload(); 
        }}>로그아웃</button>
      </h3>
    </>
  );
}