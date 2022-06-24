import React from 'react';
import { useState } from 'react';
import '../App___.css';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
import Page from './Page';

const Root = () => {
  const [isDark, setIsDark]=useState(false);
  
  return (
    // value의 값들은 Page의 모든 하위 컴포넌트에서 props 전달없이 사용가능
    <UserContext.Provider value={'비트캠프'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        {/* <Page isDark={isDark} setIsDark={setIsDark}/> */}
        <Page/>
      </ThemeContext.Provider>
    </UserContext.Provider>
    
  );
};

export default Root;