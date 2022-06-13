import React, { useState } from "react";
import '../App.css';


const SixSubApp=(props)=>{
  console.dir(props);

  return (
    <div>
      {/* props 읽기 전용 출력만 가능 */}
      <div className="line">{props.name}님의 나이는 {props.age}세입니다.</div>   
    </div>
  );
}

export default SixSubApp;