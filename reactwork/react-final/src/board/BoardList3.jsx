import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate, useParams} from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { fontFamily } from '@mui/system';


const BoardList3 = () => {
  const [data, setData]=useState('');
  const navi = useNavigate();

  // 현재 페이지 번호
  const {currentPage}=useParams();

  // url선언
  let pagelistUrl = process.env.REACT_APP_SPRING_URL + 'board/pagelist?currentPage=' + currentPage;
  let photoUrl  = process.env.REACT_APP_SPRING_URL + 'save/';

  // 시작시 호출되는 함수
  const pageList=()=>{
    axios.get(pagelistUrl)
    .then(res=>{
      setData(res.data);
    })
  }

  useEffect(()=>{
    pageList();
  },[currentPage]); // currentPage가 변경될 때마다 다시 호출

  return (
    <div>
      <h3 className='alert alert-info' style={{width:'700px'}}>
      총 {data.totalCount} 개의 게시글이 있습니다</h3>

      <List sx={{ width: '100%', height: '300px',maxWidth: 360, bgcolor: 'background.paper'}}>
        {
          data && data.list.map((row, idx)=>(
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={photoUrl + row.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={row.subject}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {row.content}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />    
            </div>
          ))
        } 
      </List>

      {/* 페이징 */}
      <div style={{width:'700px', textAlign:'center'}}>
        <ul className='pagination'>
        {
          (data.startPage > 1 ? <li>
            <Link to={`/board/list/${data.startPage-1}`}>이전</Link></li>:'')
        }  
        {
          data.parr && data.parr.map(n=>{
            const url = '/board/list/' + n;
            return (
              <li>
                <Link to={url}>
                  <b style={{color: n == currentPage?'red':'black'}}>{n}</b>
                </Link>
              </li>
            )
          })
        }
        {
          (data.endPage < data.totalPage ? 
          <li><Link to={`/board/list/${data.endPage+1}`}>다음</Link></li>:'')
        }
        </ul>
      </div>
    </div>
  );
};

export default BoardList3;