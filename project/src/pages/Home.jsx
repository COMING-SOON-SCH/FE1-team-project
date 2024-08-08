import React from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/Button';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 24px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  border: solid 1px #000;
  &::before, &::after {
    position: absolute;
    background: inherit;
    content: '';
    z-index: 1;
  }
  &::before {
    width: 140px;
    left: 30px;
    height: 203px;
    top: -1.5px;
  }
  &::after {
    height: 140px;
    left: -1.5px;
    width: 203px;
    top: 30px;
  }
  & > * {
    position: relative; 
    z-index: 2;
  }
`;

const AppLogo = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  width: 200px;
  border: 1px;
`;

const AppIntro = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const HomeStyle = createGlobalStyle`
  .btn {
    font-family: 'MangoDdobak-B';
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate('/signin');
  };

    return (
      <>
        <HomeStyle />
        <Layout>
            <LogoContainer>
              <AppLogo />
            </LogoContainer>
            <AppIntro>
              <p>동아리 관리의 모든 것</p>
              <p>크루 유니버셜 클럽</p>
            </AppIntro>
            <ButtonContainer>
            <Button className="btn sign-in" onClick={onClickSignIn}>로그인</Button>
              <Link to="/signup"><Button className="btn sign-up">회원가입</Button></Link>
            </ButtonContainer>
        </Layout>
      </>
    );
};
  
export default Home;