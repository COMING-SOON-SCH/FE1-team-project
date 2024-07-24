import React from 'react';
import { SignupTextField, PasswordField } from '../components/SignupTextField';

function SignUp() {
  return (
    <div style={BackGround}>
      <SignupTextField />
      <PasswordField/>
    </div>
  );
}

const BackGround = {
  
  width: '100vw',
  height: '100vh',
  
};

export default SignUp;