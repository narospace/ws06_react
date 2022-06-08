import React from "react";
import './mystyle.css';
import img17 from '../17.jpg';
import imgK from '../img/K-034.png';

const FirstApp = () => {
  // style을 변수에 지정
  const styleImg1 = {
    width:'200px',
    border:'5px inset gray',
    marginLeft: '100px',
    marginTop:'20px'
  };

  return (
    // 반드시 하나의 태그로 감싸줘야 한다.
    <div>
      {/* h2에 클래스 적용 */}
      <h2 className="line">First App Component!!!</h2>
      {/* css 속성 인라인 */}
      <div style={{fontFamily:'Single Day', fontSize:'25px', color:'green', marginLeft:'100px'}}>
        안녕하세요. 반가워요!!!
      </div>
      <img src={img17} alt='신민아 사진' style={styleImg1}/>
      <img  alt="" src={imgK} style={{width:'200px', border:'3px solid orange', borderRadius:'50px', marginLeft:'100px'}}/>
      <h3>public 영역의 이미지는 직접 호출 가능</h3>
      <img src="../s1.JPG" alt=""/>
    </div>
  )
}

export default FirstApp;