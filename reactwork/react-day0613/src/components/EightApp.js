import React, {useState} from 'react';
import '../App.css';
import EightSubApp from './EightSubApp';
import EightSubApp2 from './EightSubApp2';

export default function EightApp() {
  /*EightApp.js 
    1.color, message, photo 출력
    2.색상을 배열로 저장 후 원모양으로 가로방향으로 나오게 출력(더블클릭시 해당 색상 제거)
  */
  const [color, setColor] = useState('magenta');
  const [message, setMessage] = useState('Have a Nice Day!!!');
  const [photo, setPhoto] = useState('s5');

  /* EightSubApp.js
     변경은 자식 컴포넌트에서
     color는 type='color' 색상 선택시 변경
     message는 type='text' 입력시 변경
     photo는 select로 선택시 변경
  */
  const changeMessage = (msg) => {
    setMessage(msg);
  }
  const changeColor = (co) => {
    setColor(co);
  }
  const changePhoto = (p) => {
    setPhoto(p);
  }
  
  /* EightSubApp2.js
     1. 색상 선택 후 버튼 클릭시 부모의 likecolor에 색상추가
  */
  const [likeColor, setLikeColor] = useState(['pink', 'yellow', 'gray']);
  
  // 더블 클릭시 색상 제거
  const deleteLikeColor = (idx)=>{
    setLikeColor(likeColor.filter((a, i)=>(i!==idx)));
  }

  // 색상 추가 이벤트
  const addColorEvent = (co) => {
    setLikeColor(likeColor.concat(co));
  }

  return (
    <div>
      <h3 className="alert alert-info">EightApp 컴포넌트(부모, 자식 컴포넌트 통신 문제)</h3> 
      <br/>
      <h1 style={{color:color}}>{message}</h1>
      <img alt='' src={`../image/${photo}.JPG`}/>
      <br/>
      {
        likeColor.map((co, idx)=>(<div className='circle' key={idx}
          style={{backgroundColor:co, textAlign:'center'}}
          onDoubleClick={()=>{
            deleteLikeColor(idx);
          }}>{idx}</div>))
      }
      <br style={{clear:'both'}}/><br/>
      <EightSubApp onMessage={changeMessage} onColor={changeColor} onPhoto={changePhoto}/>
      <br/>
      <EightSubApp2 onAddColor={addColorEvent}/>
    </div>
  );
}
