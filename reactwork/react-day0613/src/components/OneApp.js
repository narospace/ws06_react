import React, {useState, useEffect} from "react";
import '../App.css';


const OneApp=()=>{
  const [name, setName] = useState('이영자');
  const [addr, setAddr] = useState('강남구');

  useEffect(()=>{
    console.log("state변수가 값 변경될 때마다 호출!");
  });

  useEffect(()=>{
    console.log("처음 렌더링시 한 번만 호출!");
  }, []);

  useEffect(()=>{
    console.log("이름 변경시에만 호출!");
  }, [name]);


  return (
    <div>
      <h3 className="alert alert-info">OneApp 컴포넌트(useEffect)</h3>
      <h3>이름: <input type='text' defaultValue={name} 
        onChange={(e)=>{
          setName(e.target.value);
        }}/></h3>
      <h3>주소 : <input type='text' defaultValue={addr} 
        onChange={(e)=>{
          setAddr(e.target.value);
        }}/></h3>
      <hr/>
      <h2>이름: {name}</h2>      
      <h2>주소: {addr}</h2>      
    </div>
  );
}

export default OneApp;
