import React from 'react';
import '../css/SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OutlinedTextField = () => {
  return (
    <div className="form-container">
      <div className="id-box">
        <TextField
          id="id-field"
          label="아이디"
        />
      </div>
      <div className="password-box">
        <TextField
        id="password-field"
        label="비밀번호"
        />
      </div>
    </div>
  );
}

const BackButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
    />
  );
};

const SignIn = () => {

  const onClickForgotPassword = () => {
    alert("미지원 기능입니다.");
  };

    return (
        <div className="home-container">
          <div className="background" />
            <BackButton />
            <OutlinedTextField />
            <button className="btn sign-in">로그인</button>
          <div className="forgot-password" onClick={onClickForgotPassword}>
            비밀번호를 잊으셨나요?
          </div>
        </div>
      );
};

export default SignIn;