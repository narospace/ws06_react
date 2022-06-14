import React from "react";
import { useParams } from "react-router";
import '../App.css';

const Food = () => {
  const {food1, food2} = useParams();
  
  return (
    <div>
       <h3>오늘의 식사 메뉴</h3>
       <div>
       <img src={`../../image/${food1}.jpg`} alt='' className='img-rounded'
        style={{width:'200px', height:'200px'}}/>

       <img src={`../../image/${food2}.jpg`} alt='' className='img-circle'
        style={{width:'200px', height:'200px'}}/>
       </div>
    </div>
  );
}

export default Food;