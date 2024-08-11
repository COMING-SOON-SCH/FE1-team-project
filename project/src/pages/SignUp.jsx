import React, { useState, useEffect } from 'react';
import { SignupTextField, PasswordField, SearchField } from '../components/SignupTextField';
import { Button, Stack, Grid } from '@mui/material';
import CopyRight from '../components/CopyRight';
import usePostUser from '../hooks/usePostUser';
import SetCookie from '../components/SetCookie';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    nickname: '',
    id: '',
    password: '',
    confirmPassword: '',
    university: '',
    cookie: '',
  });

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  useEffect(() => {
    const checkPasswordMatch = () => {
      setConfirmPasswordError(formValues.password !== formValues.confirmPassword);
    };
    checkPasswordMatch();
  }, [formValues.password, formValues.confirmPassword]);

  useEffect(() => {
    const cookieExists = document.cookie.includes('cookie');
    if (!cookieExists) {
      const newCookieValue = Date.now().toString();
      SetCookie('cookie', newCookieValue, { secure: true, 'max-age': 3600 });
      setFormValues(prevValues => ({
        ...prevValues,
        cookie: newCookieValue,
      }));
    } else {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookie='))
        .split('=')[1];
      setFormValues(prevValues => ({
        ...prevValues,
        cookie: cookieValue,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const { postUser } = usePostUser();

  const handleSignupClick = async (e) => {
    e.preventDefault();
    const { id, password, confirmPassword, university } = formValues;
    if (!id || !password || !confirmPassword || !university) {
      alert('모든 값을 입력해주세요');
      return;
    }

    if (confirmPasswordError) {
      alert('비밀번호가 다릅니다.');
      return;
    }

    try {
      await postUser(formValues);
      console.log('회원가입 완료');
      const newCookieValue = id;
      SetCookie('id', newCookieValue, { secure: true, 'max-age': 3600 });
      setFormValues(prevValues => ({
        ...prevValues,
        cookie: newCookieValue,
      }));
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };
  return (
    <div style={BackGround}>
      
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={2} container direction="column" alignItems="center">
          <SignupTextField texttype={'id'} fieldname={'아이디'} value={formValues.id} onChange={handleInputChange} fullWidth />
          <SignupTextField texttype={'nickname'} fieldname={'닉네임'} value={formValues.nickname} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'password'} fieldname={'비밀번호'} value={formValues.password} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'confirmPassword'} fieldname={'비밀번호 확인'} value={formValues.confirmPassword} onChange={handleInputChange} fullWidth error={confirmPasswordError} helperText={confirmPasswordError ? '비밀번호가 일치하지 않습니다  ' : ''} />
          <SearchField texttype={'university'} fieldname={'대학교 검색'} value={formValues.university} onChange={handleInputChange} fullWidth  />
          <Stack spacing={2} direction="row" justifyContent="center" marginTop={2}>
            <Button variant="contained" onClick={handleSignupClick}>회원가입</Button>
          </Stack>
          <CopyRight></CopyRight>
        </Grid>
      </Grid>
    </div>
  );
  
}




const BackGround = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};


export default SignUp;
