import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignIn from "../hooks/useSignIn";
import styled, { createGlobalStyle } from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Layout from '../components/Layout';

const OutlinedTextField = ({ id, setId, pw, setPw }) => {
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPw(event.target.value);
  };

  return (
    <>
      <div className="id-box">
        <TextField
          id="id-field"
          label="아이디"
          value={id}
          onChange={handleIdChange}
        />
      </div>
      <div className="password-box">
        <TextField
          id="password-field"
          label="비밀번호"
          type="password"
          value={pw}
          onChange={handlePasswordChange}
        />
      </div>
    </>
  );
};

const SignIn = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { signIn, passwords, isError } = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(id);

    if (passwords.length > 0 && passwords.includes(pw)) {
      navigate('/main');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const onClickForgotPassword = () => {
    alert("미지원 기능입니다.");
  };

  return (
    <>
      <SignInStyle />
      <Layout>
        <BackButton />
        <FormContainer onSubmit={handleSubmit}>
          <OutlinedTextField id={id} setId={setId} pw={pw} setPw={setPw} />
          {isError && <p>오류가 발생했습니다. 다시 시도해주세요.</p>}
          <Button className="btn sign-in" type="submit">로그인</Button>
        </FormContainer>
        <div className="forgot-password" onClick={onClickForgotPassword}>
          비밀번호를 잊으셨나요?
        </div>
      </Layout>
    </>
  );
};

const FormContainer = styled.form`
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
    margin-top: 25px;
    font-family: 'MangoDdobak-B';
  }
`;

export default SignIn;