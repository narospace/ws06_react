import React from "react";
import styled from "styled-components";
/** 페이지 이동
 * 메인 도메인 : https://facebook.com
 * path : /games, /places, ...
 * 각 경로에 따라 다른 컴포넌트 렌더링
 */

/** react-router-dom
 * 
 * 'Route' : 노선, 경로
 * 웹에서 라우팅 이란 ?
 * : 사용자가 원하는 경로로 보내는 과정
 * 
 * 라우팅 구성 컴포넌트로 페이지 설정
 * BrowserRouter(웹브라우저history), Routes, Route
 * 
 * 페이지 간 이동 
 * : useNavigate() 훅 사용
 * 
 * npm i react-router-dom
 * npm install --save react-router-dom
 */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
/** Pages */
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

/** 페이지 라우팅 구현 */
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>Bitcamp 💕 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage/>}/>
        {/* :posId(동적으로 변하는 파라미터를 위한 값) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
