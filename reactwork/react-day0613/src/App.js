import React, { useState } from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';

function App() {
  const [idx, setIdx] = useState(7);
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
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='2' />TwoApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='3' />ThreeApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='4' />FourApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='5' />FiveApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='6' />SixApp
        </label>
        &nbsp;
        <label>
          <input onClick={selectComponent} type='radio' name='comp' defaultValue='7' defaultChecked/>SevenApp
        </label>
      </div>
      <hr/>
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:<SevenApp/>}
    </div>
  );
}

export default App;
