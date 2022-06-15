import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'; // 페이지 이동

const Home = () => {
  const navi = useNavigate();

  // 가고자하는 페이지의 매핑 주소 넣기
  return (
    <div>
      <button type="button" className='btn btn-danger'
        onClick={()=>{
          navi('/about');
        }}>About</button>
      <button type="button" className='btn btn-info'
        onClick={()=>{
          navi('/about/순자');
        }}>About-Lee</button>
      <button type="button" className='btn btn-success'
        onClick={()=>{
          navi('/food/11/12');
        }}>점심메뉴</button>
      <button type="button" className='btn btn-warning'
        onClick={()=>{
          navi('/food/8/9')
        }}>저녁메뉴</button>
      
    </div>
  )
}

export default Home;