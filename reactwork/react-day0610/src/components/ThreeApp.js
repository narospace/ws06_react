import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import AppsIcon from '@mui/icons-material/Apps';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../App.css';

const ThreeApp=()=>{
  const [names, setNames] = useState(['이영자', '강호동', '유재석', '김숙', '송은이']);
  const [irum, setIrum] = useState('');

  // 추가버튼 이벤트
  const btnInsert=()=>{
    if(irum===''){
      alert("이름을 입력 후 추가해주세요!");
      return;
    }
    setNames(names.concat(irum)); // 배열에 irum 데이터 추가
    setIrum('');
  }

  // 입력 keyup 이벤트
  const txtEnter=(e)=>{
    if(e.key==='Enter'){
      btnInsert();
      e.target.value='';
    }
  }

  // 입력 change 이벤트
  const txtInput=(e)=>{
    setIrum(e.target.value);
  }

  // 더블클릭시 이름 삭제 이벤트
  const dataRemove=(index)=>{
    // console.log(index);

    // 방법1 : index번지만 빼고 잘라서 넣음
    // setNames([
    //   ...names.slice(0, index),
    //   ...names.slice(index + 1, names.length)
    // ]);
    // 방법2 : index번지만 걸러냄
    setNames(names.filter((item, i)=>i!==index));
  }

  return (
    <div>
      <Alert severity="info">ThreeApp<AppsIcon/></Alert>
      <div style={{marginLeft:'100px', marginTop:'30px'}}>
        <TextField id='outlined-basic' label="이름입력" variant="outlined" 
          size='medium' style={{width:'150px'}}
          value={irum}
          onChange={txtInput}
          onKeyUp={txtEnter}/>
        <Button variant="contained" size="small" color="info"
          style={{marginLeft:'10px', marginTop:'10px'}}
          onClick={btnInsert}>추가
        </Button>
        <br/>
        <h5>이름에서 더블클릭하면 삭제됩니다</h5>
        <ul>
          {
            names.map((na, index)=>(
              <li key={index} onDoubleClick={()=>dataRemove(index)} className="data">{na}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ThreeApp;
