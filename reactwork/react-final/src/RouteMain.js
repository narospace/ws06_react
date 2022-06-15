import React from 'react';
import './App.css';
import {
  Route, 
  Routes
} from 'react-router-dom';
import {About, Info, Main, Menu,Title} from './components';
import Board from './board/Board';
import Login from './login/Login';
import {Shop, ShopDetail, ShopForm} from './shop';
import Member from './member/Member';

export default function RouteMain() {
  return (
    <>
      <div className='title'><Title/></div>
      <div className='info'><Info/></div>
      <div className='menu'><Menu/></div>

      <div className='main'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          
          {/* Shop */}
          <Route path='/shop/list' element={<Shop/>}/>
          <Route path='/shop/form' element={<ShopForm/>}/>
          <Route path='/shop/detail/:num' element={<ShopDetail/>}/>

          <Route path='/board/list' element={<Board/>}/>
          <Route path='/member/form' element={<Member/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='*' element={
            <div>
              <h1>잘못된 URL 주소입니다.</h1>
            </div>
          }/>
        </Routes>
      </div>

    </>
  );
}