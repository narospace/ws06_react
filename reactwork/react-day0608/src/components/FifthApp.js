import React, {useState} from "react";
import './mystyle.css';

const FifthApp=()=>{
  const [name, setName] = useState('');
  const [java, setJava] = useState(0);
  const [spring, setSpring] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0.0);

  return (
    <div>
      <h2 className="alert alert-info">FifthApp 입니다.</h2>
      
      <div className="inp">
        <label>이름 : </label>
        <input type="text" style={{width:'100px'}} onChange={(e)=>{
          setName(e.target.value);
        }}/><span style={{marginLeft:'10px'}}>{name}</span>
        <br/>

        <label>자바 : </label>
        <input type="text" style={{width:'100px'}} onChange={(e)=>{
          setJava(e.target.value);
        }}/><span style={{marginLeft:'10px'}}>{java}</span>
        <br/>

        <label>스프링 : </label>
        <input type="text" style={{width:'100px'}} onKeyUp={(e)=>{
          setSpring(e.target.value);
        }}/><span style={{marginLeft:'10px'}}>{spring}</span>
        <br/>
        <br/>
        <br/>
        <button type="button" className="btn btn-info" 
          onClick={()=>{
            setTotal(Number(java) + Number(spring));
            setAvg((Number(java) + Number(spring))/2);
          }}>결과확인</button>
      </div>

      <div className="result" style={{width:'300px', height: '300px', border: '1px solid gray'}}>
        이름: {name}<br/>
        자바: {java}점<br/>
        스프링: {spring}점<br/>
        <hr/>
        총점: {total}점<br/>
        평균: {avg}점<br/>
      </div>
    </div>
  )
}

export default FifthApp;