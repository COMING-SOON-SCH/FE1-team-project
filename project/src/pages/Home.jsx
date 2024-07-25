import React from 'react';
import '../css/Home.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate('/signin');
  };

    return (
      <div className="home-container">
        <div className="background" />
          <div className="logo-container">
            <img src={logo} alt="App Logo" className="app-logo" />
          </div>
          <div className="app-intro">
            <p>동아리 관리의 모든 것</p>
            <p>크루 유니버셜 클럽</p>
          </div>
          <div className="button-container">
            <button className="btn sign-in" onClick={onClickSignIn}>로그인</button>
            <Link to="/signup"><button className="btn sign-up">회원가입</button></Link>
          </div>
      </div>
    );
}
  
export default Home;