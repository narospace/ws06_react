import React from 'react';
import '../App___.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

// const Page = ({isDark, setIsDark}) => {
const Page = () => {
  return (
    <div className='page'>
      {/* <Header isDark={isDark}/>
      <Content isDark={isDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;