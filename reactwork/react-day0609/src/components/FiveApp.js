import React, { useState } from "react";
import '../App.css';

const FiveApp = ()=>{
  const [photo, setPhoto] = useState('../image2/01.png');
  const changePhoto=(e)=>{
    setPhoto(e.target.value);
  }
  return (
    <>
      <h3 className="alert alert-danger">FiveApp 컴포넌트입니다</h3>

      <div className="doll" style={{fontSize:'20px'}}>
        <b>인형선택 : </b>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/01.png' defaultChecked/>인형1
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/02.png'/>인형2
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/03.png'/>인형3
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/04.png'/>인형4
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/05.png'/>인형5
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/06.png'/>인형6
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/07.png'/>인형7
        </label>
        <label>
          <input onClick={changePhoto} type='radio' name="photo" value='../image2/08.png'/>인형8
        </label>
      </div>
      <img alt="" src={photo}/>
    </>
  );
}

export default FiveApp;