
import React, {useState, useEffect} from 'react'
import axiox from 'axios'
import styled from 'styled-components'
import './App.css';

/** JS에서 비동기 HTTP 통신
 * Ajax, Axios, fetch
 */

/** REST API
 * (Representational State Transfer)
 * 두 컴퓨터 시스템이 인터넷을 통해 
 * 정보를 안전하게 교환하기 위해 사용하는 인터페이스입니다.
 * 
 * URI : 정보의 자원
 * HTTP Method :  GET, POST, PUT, DELETE
 */

/** axious 
 * node.js와 브라우저를 위한 비동기 HTTP 통신 라이브러리
 * 
 *  https://www.npmjs.com/package/axios
 *  $ npm install axios
 *  https://axios-http.com/
 * 
 *  {JSON} Placeholder 
 *  https://jsonplaceholder.typicode.com/
 *  
 *  모사 데이터 받아오기
 *  https://jsonplaceholder.typicode.com/posts
 */

const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
    // axiox({
    //   method:'get',
    //   url: 'https://jsonplaceholder.typicode.com/photos',
    // }).then(response => {
    //   setPosts(response.data);
    // });

    axiox.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => setPosts(res.data));
    
    // then 비동기 통신   
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg' alt='myimg' style={{ width: 100, height: 100, borderRadius: 100 }} />
          <div className='d-flex' style={{ justifyContent: 'center' }}>
            <input className='form-control w-50' />
            <button className='btn btn-danger ml-1'>Search</button>
          </div>
        </div>
        <hr/>
        <div className='container'>
          <span style={{color:'#999'}}>{`Total ${posts.length}`}</span>
          <hr/>
          <table className="table text-light" style={{fontSize:'1rem'}}>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              
                {
                  posts.map((post, idx)=>{
                    
                    return (
                      <tr key={idx}>
                        <th scope="row">{post.id}</th>
                        {/* <td>{post.userId}</td> */}
                        <td><MyImg src={post.thumbnailUrl} alt=''/></td>
                        <td>{post.title}</td>
                        <td>{post.url}</td>
                      </tr>
                      
                    );
                  })
                }
              
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
