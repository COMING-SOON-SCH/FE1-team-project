import React from 'react';
import { Button, IconButton, Avatar, Box, Container, Stack } from '@mui/material';
import SidebarIcon from '@mui/icons-material/Menu'; // 사이드바 아이콘
import OptionsIcon from '@mui/icons-material/Settings'; // 옵션 아이콘


// 사이드바 버튼 컴포넌트
function SidebarButton() {
  return (
    <IconButton>
      <SidebarIcon />
    </IconButton>
  );
}

// 옵션 버튼 컴포넌트
function OptionsButton() {
  return (
    <IconButton>
      <OptionsIcon />
    </IconButton>
  );
}

// 프로필 사진 컴포넌트
function ProfilePicture({ onUpload }) {
  const handleFileChange = (event) => {
    // 파일 업로드 로직
    onUpload(event.target.files[0]);
  };

  return (
    <Box>
      <IconButton component="label">
        <Avatar src="프로필 사진 URL" alt="프로필 사진" sx={{width : 150, height: 150, mt:15}}/>
        <input type="file" hidden onChange={handleFileChange} />
      </IconButton>
    </Box>
  );
}

// 프로필 정보 컴포넌트
function ProfileInfo({ name, id, password, onPasswordChange, onSave }) {
    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Stack spacing={2} fontSize={20}>
          <div>이름: {name}</div>
          <div>아이디: {id}</div>
          <div>비밀번호: <input type="password" value={password} /></div>
          
          <Box display="flex" flexDirection="column" alignItems="center" width="100%" marginTop={20}>  
          <Button variant="contained" sx={{width:'35%'}} justifyContent='center' onClick={onPasswordChange}>
            비밀번호 변경
          </Button>
          <Button
            variant="contained"
            onClick={onSave}
            sx={{ width: '20%', mt:2}} // 버튼 크기 조정
            
          >
            저장
          </Button>
        </Box>
        </Stack>
      </Box>
    );
  }
// 메인 컴포넌트
function ClubProfile() {
  const name='이름'
  const id='아이디'
  const password='비밀번호'

  const handleUpload = (file) => {
    // 사진 업로드 로직
    console.log(file);
  };

  const handlePasswordChange = (event) => {
    alert('아직 미구현입니다.');
  };

  const handleSave = () => {
    // 저장 로직
    console.log('저장되었습니다.');
  };

  return (
    <Container sx={{width:'100%', margin :0}} >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <SidebarButton />
        <OptionsButton />
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <ProfilePicture onUpload={handleUpload} />
      </Box>
      <ProfileInfo
        name={name}
        id={id}
        password={password}
        onPasswordChange={handlePasswordChange}
        onSave={handleSave}
      />
    </Container>
  );
}

export default ClubProfile;
