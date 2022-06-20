import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const navi = useNavigate();

  const onSubmit=(e)=>{
    e.preventDefault();

    const url = process.env.REACT_APP_SPRING_URL + "member/login";
    axios.post(url, {id, pass})
    .then(res=>{
      if(res.data===0){
        alert("아이디 또는 비밀번호가 맞지 않습니다");
      }else{
        localStorage.loginok = "yes";
        localStorage.myid = id;
        
        // 새로고침
        window.location.reload(); 
        // navi("/login");
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <table className='table table-bordered' style={{width:'300px'}}>
          <caption><h3>회원 로그인</h3></caption>
          <tbody>
            <tr>
              <td width={200}>
                <input type={'text'} placeholder="아이디" 
                style={{width:'180px'}} className="form-control" 
                onChange={(e)=>{
                  setId(e.target.value);
                }} required/>
              </td>
              <td rowSpan={2}>
                <button type="submit" className='btn btn-info'
                style={{width:'100%', height:'80px'}}>로그인</button>
              </td>
            </tr>
            <tr>
              <td width={200}>
                <input type={'password'} placeholder='비밀번호'
                style={{width:'180px'}} className="form-control" 
                onChange={(e)=>{
                  setPass(e.target.value);
                }} required/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}