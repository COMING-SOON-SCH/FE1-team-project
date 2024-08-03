import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Layout from '../components/Layout';

const OutlinedTextField = ({userId, setUserId, password, setPassword}) => {

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <FormContainer>
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
    </FormContainer>
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
    <>
      <SignInStyle />
        <Layout>
          <BackButton />
          <OutlinedTextField userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} />
          <Button className="btn sign-in" onClick={handleSignIn}>로그인</Button>
          <div className="forgot-password" onClick={onClickForgotPassword}>
            비밀번호를 잊으셨나요?
          </div>
        </Layout>
    </>
      );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 160px;
  margin-bottom: 20px;
`;

const SignInStyle = createGlobalStyle`
  .id-box, .password-box {
    width: fit-content;
    border-radius: 5%;
    background: rgba(255, 255, 255, 0.5);
  }
  .id-box {
    margin-top: 20px;
  }
  .password-box {
    margin-top: 15px;
  }

  .forgot-password {
    cursor: pointer;
    font-size: 12px;
    margin-top: 20px;
  }

  .btn {
    font-family: 'MangoDdobak-B';
  }
`;

export default SignIn;