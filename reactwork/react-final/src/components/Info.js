import React from 'react';
import '../App.css';
import infoimg from '../image/popup5.jpg';

export default function Info() {
  return (
    <>
      <img src={infoimg} alt='' style={{width:'250px'}}/>
      <br/><br/>
      <div>
        <span className='glyphicon glyphicon-home'>비트캠프</span>
        </div>
      <div>02-222-3333</div>
    </>
  );
}