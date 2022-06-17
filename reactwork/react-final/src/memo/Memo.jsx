import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import MemoRowItem from './MemoRowItem';
import { useNavigate } from 'react-router-dom';

const Memo=()=>{
  // .env 파일로부터 전역변수 사용(서버 재시작해야 적용)
  const SPRING_URL = process.env.REACT_APP_SPRING_URL;
  let insertUrl = SPRING_URL + "memo/insert";
  let listUrl   = SPRING_URL + "memo/list";

  const navi = useNavigate();

  // 서버로 보낼 데이터
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  // 서버에서 받아 올 데이터
  const [memoList, setMemoList] = useState([]);
  const list=()=>{
    axios.get(listUrl)
    .then(res=>{
      // 서버로부터 받아 온 리스트 넣기
      setMemoList(res.data);
    })
  }

  const onInsert=(e)=>{
    // console.log(`별명[${nickname}] : ${message}`);
    axios.post(insertUrl, {nickname, message})
    .then(res=>{
      list();
      navi('/memo');
    });
  }

  useEffect(()=>{
    list();
  }, []);

  return (
    <div>
      <h1>Memo</h1>
      <label>닉네임 :
        <input id="nick" type='text' placeholder='nickname' style={{width:'300px', marginLeft:'10px'}}
          onChange={(e)=>{
            setNickname(e.target.value);  
          }}/>
      </label><br/>
      <label>메시지 :
        <textarea  id='msg' style={{width:'300px', height:'120px', marginLeft:'10px'}}
          onChange={(e)=>{
            setMessage(e.target.value);
            if(e.key==='Enter'){
              onInsert();
            }
          }}/>
      </label>
      <hr/>
      <table className='table table-bordered' style={{width:'550px'}}>
        <caption>메모 리스트({memoList.length}개)</caption>
        <thead>
          <tr style={{background:'#ddd'}}>
            <th width='5%'>No</th>
            <th width='20%'>닉네임</th>
            <th>메시지</th>
            <th width='20%'>등록일</th>  
          </tr>
        </thead>
        <tbody>
          {
            memoList.map((row, idx)=>(
              <MemoRowItem key={idx} idx={idx} row={row}/>
            ))  
          }
        </tbody>
        <tbody>
        </tbody>
      </table>    
    </div>
  );
}

export default Memo;