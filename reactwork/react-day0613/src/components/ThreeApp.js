import React, { useState } from "react";
import '../App.css';

const ThreeApp=()=>{
  const [boards, setBoards] = useState([
    {
      no:1,
      writer:'이미자',
      subject:'hello',
      photo:'s1'
    },
    {
      no:2,
      writer:'박남정',
      subject:'안녕하세요',
      photo:'s3'
    },    
    {
      no:3,
      writer:'하하',
      subject:'밥먹고 합시다~',
      photo:'s5'
    },    
    {
      no:4,
      writer:'홍길동',
      subject:'오늘은 비대면',
      photo:'s7'
    },
    {
      no:5,
      writer:'임꺽정',
      subject:'싸우자~',
      photo:'s10'
    }
  ]);

  return (
    <div>
      <h3 className="alert alert-info">ThreeApp 컴포넌트(state를 배열 객체로)</h3>
      <table className="table table-bordered" style={{width:'400px'}}>
        <caption><b>배열 객체 출력</b></caption>
        <thead>
          <tr style={{backgroundColor:'#ddd'}}>
            <th width='60'>번호</th>
            <th width='100'>사진</th>
            <th width='300'>제목</th>
            <th width='100'>작성자</th>
          </tr>
        </thead>
        <tbody>
          {
            boards.map((row, index) => (
              <tr key={index}>
                <td>{row.no}</td>
                <td><img alt="" src= {`../image/${row.photo}.JPG`} style={{width:'30px'}}/></td>
                <td>{row.subject}</td>
                <td>{row.writer}</td>
              </tr>
            ))
          }
        </tbody>
      </table>      
    </div>
  );
}

export default ThreeApp;
