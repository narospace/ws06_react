import React from "react";
import Alert from '@mui/material/Alert';
import AppsIcon from '@mui/icons-material/Apps';
import '../App.css';


const OneApp=()=>{
  // 배열 변수 선언
  const names = ['이미자', '강호동', '이영자', '유재석', '김숙'];
  
  // 반복문을 변수에 저장후 출력해도 됨
  const nameList = names.map((name, idx)=>(<li key={idx}>{name}</li>));

  // 색상을 배열로
  const colors = ['red', 'green', 'orange', 'gray', 'pink', 'magenta', 'cyan', 'yellow'];

  return (
    <div>
      <Alert severity="error">OneApp
      <AppsIcon/>
      </Alert>

      <div>
        <h3>map 반복문 연습</h3>
        {/* <ol>{nameList[0]}</ol> */}
        <ol>{nameList}</ol>
        <hr/>
        <ul>
          {
            names.map((name, index)=>(<b key={index} style={{marginLeft:'10px'}}>{index}:{name}</b>))
          }
        </ul>
        <hr/>
        {
          colors.map((color, idx)=>(<div key={idx} className="box" style={{backgroundColor:color}}/>))
        }
      </div>
      
    </div>
  );
}

export default OneApp;
