import React, { useState } from "react";
import '../App.css';

// const SixSubApp3=(incre, decre)=>{
const SixSubApp3=(props)=>{
  
  return (
    <div>
      <button type="button" className="btn btn-info" style={{marginLeft:'60px'}}
        onClick={()=>{
          // decre();
          props.decre(); // 부모 컴포넌트의 이벤트 발생  
        }}>감소</button>

      <button type="button" className="btn btn-info" style={{marginLeft:'5px'}}
        onClick={()=>{
          // incre();
          props.incre(); // 부모 컴포넌트의 이벤트 발생  
        }}>증가</button>
    </div>
  );
}

export default SixSubApp3;