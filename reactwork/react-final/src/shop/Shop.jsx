import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const navi = useNavigate();
  return (
    <>
      <button type='button' className='btn btn-info' style={{width:'100px'}} 
        onClick={()=>{
          navi('/shop/form'); // 상품 폼 페이지로 이동
        }}>상품등록</button>
      <h1>Shop 목록 출력...</h1>
    </>
  );
}