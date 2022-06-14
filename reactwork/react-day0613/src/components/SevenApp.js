import React, { useState } from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WirteForm from "./WriteForm";

const SevenApp=()=>{
  const [board, setBoard] = useState([
    {
      name : '이영자',
      photo : 's2',
      blood : 'AB',
      today : new Date()
    },
    {
      name : '강호동',
      photo : 's1',
      blood : 'A',
      today : new Date()
    },
    {
      name : '유재석',
      photo : 's6',
      blood : 'B',
      today : new Date()
    }
  ]);
  
  // 데이터 추가하는 함수 이벤트
  const dataSave = (data) => {
    setBoard(board.concat({
      /*
      name : data.name,
      photo : data.photo,
      blood : data.blood
       */
      
      ...data,
      today : new Date()
    }));
  }

  // 데이터 삭제하는 이벤트
  const dataDelete = (idx) => {
    setBoard(board.filter((item, i)=>(i!==idx)));
  }

  return (
    <div>
      <h3 className="alert alert-info">SevenApp 컴포넌트(부모, 자식 컴포넌트 통신)</h3>
      <WirteForm onSave = {dataSave} />
      <table className="table table-bordered" style={{width:'500px'}}>
        <caption><b>Board 배열 출력</b></caption>
        <thead>
          <tr style={{backgroundColor:'orange'}}>
            <th width='100'>이름</th>
            <th width='110'>사진</th>
            <th width='70'>혈액형</th>
            <th width='100'>날짜</th>
            <th width='70'>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            board.map((row, index)=>(<RowItemApp row={row} key={index}
              idx={index} onDelete={dataDelete}/>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default SevenApp;