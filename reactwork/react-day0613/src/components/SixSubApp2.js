import React, { useState } from "react";
import '../App.css';


const SixSubApp2=({flower, price, linecolor})=>{
  
  return (
    <div>
      {/* props 읽기 전용 출력만 가능 */}
      <div className="line" style={{borderColor:linecolor}}>
        {flower} 1 단의 가격은 {price}원 입니다.
      </div>   
    </div>
  );
}

export default SixSubApp2;