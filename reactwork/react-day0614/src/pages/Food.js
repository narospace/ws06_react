import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';

const Food = () => {
  const {food1, food2} = useParams();
  const navi = useNavigate();

  return (
    <div>
       <h3>오늘의 식사 메뉴</h3>
       <button type="button" className='btn btn-primary'
       onClick={()=>{
        navi(-1);
       }}>이전페이지</button>
       <br/>
       <img src={`../../image/${food1}.jpg`} alt='' className='img-circle'
        style={{width:'200px', height:'200px'}}/>

       <img src={`../../image/${food2}.jpg`} alt='' className='img-circle'
        style={{width:'200px', height:'200px'}}/>
       
    </div>
  );
}

export default Food;