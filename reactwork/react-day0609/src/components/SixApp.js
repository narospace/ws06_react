import React, { useState } from "react";
import '../App.css';

const SixApp = ()=>{
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState('visible');
  const [line, setLine] = useState('solid');
  const [color, setColor] = useState('green');

  return (
    <>
      <h3 className="alert alert-info">SixApp 컴포넌트입니다</h3>
      
      <button type="button" className="btn btn-info"
        onClick={()=>{
          setShow(!show);
        }}>
        boolean으로 이미지 보였다 안보였다하기
      </button>
      <img src="../image2/01.png" alt=""/>
      {show && <img src="../image2/01.png" alt=""/>}
      <br/><br/>
      
      <button type="button" className="btn btn-warning"
        onClick={()=>{
          setVisible(visible==='hidden' ? 'visible' : 'hidden');
        }}>
        style로 이미지 보였다 안보였다하기
      </button>
      <img src="../image2/08.png" alt="" style={{visibility:visible, borderStyle:line, borderColor:color}} 
        className="greenline"/>
      
      <select style={{marginLeft:'15px', fontSize:'20px'}} onChange={(e)=>{
        setLine(e.target.value);
      }}>
        <option>dotted</option>
        <option>dashed</option>
        <option>inset</option>
        <option>double</option>
        <option>groove</option>
        <option selected>solid</option>
      </select>

      <select style={{marginLeft:'15px', fontSize:'20px'}} onChange={(e)=>{
        setColor(e.target.value);
      }}>
        <option>yellowgreen</option>
        <option>crimson</option>
        <option>gray</option>
        <option>blueviolet</option>
        <option>deeppink</option>
        <option selected>green</option>
      </select>
    </>
  );
}

export default SixApp;