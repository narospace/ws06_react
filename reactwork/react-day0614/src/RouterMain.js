import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home, About} from './pages'; // 자동으로 pages 폴더의 index.js가 import
import Menu from './components/Menu';
import './App.css';
import Food from './pages/Food';
import foodimg from "./image/5.jpg";

const RouterMain = () => {
  return (
    <div>
      {/* 모든 페이지에서 공통으로 포함되는 컴포넌트나 이미지 */}
      <h1 className='alert alert-info title'>React Router 공부하기</h1>
      <Menu/>
      <img src={foodimg} alt='' className='main_photo'/>
      <hr className='line' align='left'/>
      <div className='main_comp'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about/:name' element={<About/>}/>
          <Route path='/food/:food1/:food2' element={<Food/>}/>
          
          <Route path='/login/*' element={
            <div>
              <h1>로그인 기능은 아직 구현 전입니다</h1>
              <img alt='' src='../image/1.jpg'></img>
              <h3>이거 보시고 오세요!!!</h3>
            </div>
          }></Route>
          {/* 위 외의 매핑 주소일 경우 */}
          <Route path='*' element={
            <h1>잘못된 주소입니다.</h1>
          }/>


        </Routes>
      </div>
    </div>
  );
}

export default RouterMain;