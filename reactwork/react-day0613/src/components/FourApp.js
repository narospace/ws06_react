import React, { useState, useRef } from "react";
import '../App.css';

// useRef : 변수 관리하는 기능
// state 와의 차이점 : 값이 변경되어도 다시 렌더링하지 않음(참조:set은 호출할 때마다 렌터링)


const FourApp=()=>{
  const [count, setCount] = useState(0);
  // Ref 선언
  const countRef = useRef(0);

  // state 변수 증가하는 함수
  const stateIncre=()=>{
    setCount(count + 1);
  }

  // ref 변수 증가하는 함수
  const refIncre=()=>{
    countRef.current=countRef.current + 1;
    console.log("countRef=" + countRef.current);
  }

  return (
    <div>
      <h3 className="alert alert-info">FourApp 컴포넌트(useRef)</h3>     
      <button type="button" className="btn btn-danger"
        onClick={stateIncre}>state변수 증가</button> 
      <div className="number">{count}</div>
      <hr/>
      <button type="button" className="btn btn-success"
        onClick={refIncre}>ref변수 증가</button>
      <div className="number">{countRef.current}</div>   
    </div>
  );
}

export default FourApp;
