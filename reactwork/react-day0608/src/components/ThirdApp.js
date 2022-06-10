import React, {useState} from "react";
import Fourth from "./FourthApp";

const ThirdApp=()=>{
  // 상태관리를 위한 변수 설정
  const [message, setMessage] = useState('Happy Day');

  // 이벤트 함수
  const handleEnter=(e)=>{
    if(e.key==='Enter'){
      setMessage('');     // message 변수값 지우기
      e.target.value='';  // 입력값 지우기
    }
  }

  return (
    <div>
      <h2 className="alert alert-info" style={{fontFamily:'Dongle'}}>
        <strong>ThirdApp 입니다.</strong></h2>
      <h3 style={{color:'red'}}>{message}</h3>
      <hr/>
      <h4>메시지를 입력해보세요</h4>
      <input type='text' style={{width:'300px', fontSize:'2em'}}
        onChange={(e)=>{
          // console.log(e.target.value); // 입력한 값
          // message 변수에 입력값 넣기
          setMessage(e.target.value);
        }}
        onKeyUp={handleEnter}/>
        <hr/>
        <Fourth/>
    </div>   
  )
}

export default ThirdApp;