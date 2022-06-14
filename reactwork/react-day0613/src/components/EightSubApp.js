import React from 'react';
import '../App.css';

export default function EightSubApp(props) {
  return (
    <>
      <div className='alert alert-danger' style={{width:'500px'}}>
        <h4>EightSubApp 컴포넌트입니다</h4>
        <b>메세지</b>
        <input type='text' className='form-control' 
          onChange={(e)=>{
            props.onMessage(e.target.value);
        }}/>
        <br/>
        <b>글자색 변경</b>
        <input type='color' defaultValue='#ffccff' className='form-control'
          onChange={(e)=>{
            props.onColor(e.target.value);
        }}/>
        <br/>
        <b>이미지 변경</b>
        <select className='form-control'
          onChange={(e)=>{
            props.onPhoto(e.target.value);
        }}>
          {
            [...new Array(10)].map((a, idx)=>(<option>{`s${idx+1}`}</option>))
          }  
        </select>
      </div>
    </>
  );
}