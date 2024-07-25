import React from 'react';
import '../css/Home.css';
import logo from '../assets/logo.svg';

const Home = () => {

    return (
      <div className="home-container">
        <div className="background" />
        <div className="filter" />
          <div className="circle" id="circle1" />
          <div className="circle" id="circle2" />
          <div className="circle" id="circle3" />
          <div className="circle" id="circle4" />
          <div className="circle" id="circle5" />
          <div className="logo-container">
            <img src={logo} alt="App Logo" className="app-logo" />
          </div>
          <div className="app-intro">
            <p>동아리 관리의 모든 것</p>
            <p>크루 유니버셜 클럽</p>
          </div>
          <div className="button-container">
            <button className="btn sign-in">로그인</button>
            <button className="btn sign-up">회원가입</button>
          </div>
      </div>
    );
}
  
export default Home;