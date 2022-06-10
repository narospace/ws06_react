import React, { useState } from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';

function App() {
  const [idx, setIdx] = useState(4);
  const selectComponent=(e)=>{
    setIdx(Number(e.target.value));
  }

  return (
    <div>
      <div style={{fontSize:'20px'}}>
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='1' />OneApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='2'/>TwoApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='3'/>ThreeApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='4' defaultChecked/>FourApp
        </label>
        &nbsp;
      </div>
      <hr/>
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:<FourApp/>}
    </div>
  );
}

export default App;
