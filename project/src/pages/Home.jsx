import React from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import Background from '../components/Background';
import BackgroundFilter from '../components/BackgroundFilter';
import BackgroundCircle from '../components/BackgroundCircle';
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
  position: relative;
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

const Home = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate('/signin');
  };

    return (
      <Container>
        <Background />
        <BackgroundFilter />
          <BackgroundCircle width="110px" height="110px" left="20%" top="85%" background="linear-gradient(#83b2ff, #67caff)" />
          <BackgroundCircle width="150px" height="150px" left="12%" top="40%" background="linear-gradient(#00fbff, #7961ff)" />
          <BackgroundCircle width="180px" height="180px" left="46%" top="65%" background="linear-gradient(#00ffd5, #00d9ff)" />
          <BackgroundCircle width="170px" height="170px" left="25%" top="5%" background="linear-gradient(#4EFFF8, #57FFD7)" />
          <BackgroundCircle width="140px" height="140px" left="55%" top="20%" background="linear-gradient(#4EFFF8, #69a2fe)" />
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <AppIntro>
            <p>동아리 관리의 모든 것</p>
            <p>크루 유니버셜 클럽</p>
          </AppIntro>
          <ButtonContainer>
          <Button className="sign-in" onClick={onClickSignIn}>로그인</Button>
            <Link to="/signup"><Button className="sign-up">회원가입</Button></Link>
          </ButtonContainer>
      </Container>
    );
}
  
export default Home;