import React from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import AppsIcon from '@mui/icons-material/Apps';
import img1 from '../image2/s1.JPG';
import img2 from '../image2/s2.JPG';
import img3 from '../image2/s3.JPG';
import img4 from '../image2/s4.JPG';
import img5 from '../image2/s5.JPG';

const TwoApp=()=>{
  // 이미지를 배열변수에 넣기
  const imgArr = [img1, img2, img3, img4, img5]; // src
  const imgList = imgArr.map((img, idx)=>(<img key={idx} alt="" src={img} style={{width:'80px'}}/>));

  const imgArr2 = [1, 2, 3, 4, 5];               // public
  
  return (
    <div>
      <Alert severity="warning">TwoApp<AppsIcon/></Alert>
      <h4>src의 이미지를 배열에 넣어 반복하기</h4>
      {
        // imgArr.map((myimg)=>(<img alt='' src={myimg}/>))
        imgList  
      }
      <hr/>
      <h4>public의 이미지를 배열에 넣어 반복하기</h4>
      {
        imgArr2.map((photo, idx)=>(<img key={idx} alt="" src={`../image/0${photo}.png`} className='photo'/>))
      }
    </div>

  );
}

export default TwoApp;
