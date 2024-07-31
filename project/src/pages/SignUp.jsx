import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupTextField, PasswordField, SearchField } from '../components/SignupTextField';
import { Button, Stack, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CopyRight from '../components/CopyRight';

const SignUp = () => {
  const navigate = useNavigate();
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


  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  useEffect(() => {
    if (formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }, [formValues.confirmPassword, formValues.password]);
  const handleBackClick = () => {
    navigate('/');
  };

  const handleSignupClick = (e) => { 
    e.preventDefault();
    const { id, password, confirmPassword, university } = formValues;
  
    // 모든 필드가 채워졌는지 확인
    if (!id || !password || !confirmPassword || !university) {
      alert('모든 값을 입력해주세요');
      return;
    }
    else if(confirmPasswordError){
      alert('비밀번호가 다릅니다.');
    }
    (console.log('id = ',id,'\n password = ',password, '\nconfirmpassword = ',confirmPassword, '\nuniversity = ',university));
  };

  return (
    <div style={BackGround}>
      <IconButton onClick={handleBackClick} style={{ position: 'absolute', top: 16, left: 16 }}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={2} container direction="column" alignItems="center">
          <SignupTextField texttype={'id'} value={formValues.id} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'password'} value={formValues.password} onChange={handleInputChange} fullWidth />
          <PasswordField texttype={'confirmPassword'} value={formValues.confirmPassword} onChange={handleInputChange} fullWidth error={confirmPasswordError} helperText={confirmPasswordError ? '비밀번호가 일치하지 않습니다  ' : ''} />
          <SearchField texttype={'university'} value={formValues.university} onChange={handleInputChange} fullWidth  />
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