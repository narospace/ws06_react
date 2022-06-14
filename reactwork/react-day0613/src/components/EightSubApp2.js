import React, {useState} from 'react';
import '../App.css';

export default function EightSubApp2(props) {
  const [color, setColor] = useState('#ccccff');

  // 버튼 이벤트
  const buttonEvent = () => {
    props.onAddColor(color);
  }

  return (
    <div className='alert alert-info' style={{width:'500px'}}>
      <h4>EightSubApp2 컴포넌트입니다</h4>
      <div className='form-inline'>
        <b>색상선택 : </b>
        <input type='color' defaultValue={color} style={{width:'50px'}}
          onChange={(e)=>{
            setColor(e.target.value)
          }}/>
        
        <button type='button' className='btn btn-warning btn-sm' 
          style={{marginLeft:'10px'}} onClick={buttonEvent}>
          색상추가
        </button>
      </div>
    </div>
  );
}