import React, { useState } from "react";
import '../App.css';
// 이미지 5개 선언
import img1 from '../image/s1.JPG';
import img2 from '../image/s2.JPG';
import img3 from '../image/s3.JPG';
import img4 from '../image/s4.JPG';
import img5 from '../image/s5.JPG';

const FourApp = ()=>{
  const [hp1, setHp1] = useState('02');
  const [hp2, setHp2] = useState('1234');
  const [hp3, setHp3] = useState('5678');

  const [photo, setPhoto] = useState(1);
  const changePhoto=(e)=>{
    setPhoto(Number(e.target.value));
  }

  const changeHp1 = (e)=>{
    setHp1(e.target.value);
  }

  const changeHp2 = (e)=>{
    setHp2(e.target.value);
  }

  const changeHp3 = (e)=>{
    setHp3(e.target.value);
  }

  return (
    <>
      <h3 className="alert alert-success">FourApp 컴포넌트입니다</h3>
      <div className="form-inline">
        <select className="form-control" style={{width:'70px'}} onChange={changeHp1}>
          <option value="02">02</option>
          <option value="032">032</option>
          <option value="010">010</option>
        </select>
        <b>-</b>
        <input type="text" maxLength='4' className="form-control" 
          defaultValue={hp2} onKeyUp={changeHp2} style={{width:'100px'}}/>
        <b>-</b>
        <input type="text" maxLength='4' className="form-control" 
          defaultValue={hp3} onKeyUp={changeHp3} style={{width:'100px'}}/>
        
        <b style={{marginLeft:'50px'}}>이미지 선택: </b>
        <select className="form-control" onChange={changePhoto}>
          <option value="1">철수</option>
          <option value="2">민수</option>
          <option value="3">영수</option>
          <option value="4">길동</option>
          <option value="5">순자</option>
        </select>
      </div>
      <br/>
      <h1>{hp1}-{hp2}-{hp3}</h1>
      <img src={photo===1 ? img1 : photo===2 ? img2 : photo===3 ? img3 : photo===4 ? img4 : img5} alt="" className="photo"/>
    </>
  );
}

export default FourApp;