import React, { useState } from 'react';
import { SignupTextField, PasswordField, SearchField } from '../components/SignupTextField';
import { Button, Stack, Grid } from '@mui/material';

function SignUp() {
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    university: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSignupClick = (e) => { 
    e.preventDefault();
    const { id, password, confirmPassword, university } = formValues;
  
    // 모든 필드가 채워졌는지 확인
    if (!id || !password || !confirmPassword || !university) {
      alert('모든 값을 입력해주세요');
      return;
    }
  };

  return (
    <div style={BackGround}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={2} container direction="column" alignItems="center">
          <SignupTextField texttype={'id'} value={formValues.id} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'password'} value={formValues.password} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'confirmPassword'} value={formValues.confirmPassword} onChange={handleInputChange} fullWidth />
          <SearchField label={'university'} value={formValues.university} onChange={handleInputChange} fullWidth />
          <Stack spacing={2} direction="row" justifyContent="center" marginTop={2}>
            <Button variant="contained" onClick={handleSignupClick}>회원가입</Button>
          </Stack>
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
