import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignIn.css';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Container from '../components/Container';
import Background from '../components/Background';
import BackgroundFilter from '../components/BackgroundFilter';
import BackgroundCircle from '../components/BackgroundCircle';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const OutlinedTextField = ({userId, setUserId, password, setPassword}) => {

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="form-container">
      <div className="id-box">
        <TextField
          id="id-field"
          label="아이디"
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <div className="password-box">
        <TextField
        id="password-field"
        label="비밀번호"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        />
      </div>
    </div>
  );
}

const SignIn = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // 임의로 생성한 회원 정보 (로그인 확인용)
  const registeredUsers = [
    { userId: 'user', password: 'password'}
  ];

  const handleSignIn = () => {
    const user = registeredUsers.find(user => user.userId === userId && user.password === password);
    
    if (user) {
      navigate('/main'); // 로그인 성공 시 메인 페이지로 이동
    }
    else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    setUserId('');
    setPassword('');
    }
  }

  const onClickForgotPassword = () => {
    alert("미지원 기능입니다.");
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
            <BackButton />
            <OutlinedTextField userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} />
            <Button className="btn sign-in" onClick={handleSignIn}>로그인</Button>
          <div className="forgot-password" onClick={onClickForgotPassword}>
            비밀번호를 잊으셨나요?
          </div>
        </Container>
      );
};

export default SignIn;