import React, { useState, useEffect } from 'react';
import { Button, IconButton, Avatar, Container, Stack } from '@mui/material';
import OptionsIcon from '@mui/icons-material/Settings';
import { PasswordField, SignupTextField } from '../components/SignupTextField';
import styled from 'styled-components';
import useGetInfoById from '../hooks/useGetInfoById';

export function MyhomePage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    id: '',
    password: '',
    currentPassword: '',
    showPasswordChange: false,
  });

  const { getInfoById, allUser } = useGetInfoById(); // 훅 사용

  useEffect(() => {
    const fetchData = async () => {
      await getInfoById(); // 사용자 정보를 가져오는 훅 호출
    };
    fetchData();
  }, [getInfoById]);

  useEffect(() => {
    if (allUser.length > 0) {
      const user = allUser[0];
      setUserInfo((prev) => ({
        ...prev,
        name: user.name || 'comingsoon',
        password: user.password || '비밀번호',
        currentPassword: user.password || '비밀번호',
        id: user.id || '', // ID 업데이트
      }));
    }
  }, [allUser]);

  const handlePasswordChangeClick = () => {
    setUserInfo((prev) => ({ ...prev, showPasswordChange: true }));
  };

  const handleSave = () => {
    const { password, currentPassword } = userInfo;
    if (password !== currentPassword) {
      setUserInfo((prev) => ({ ...prev, currentPassword: password }));
      console.log('이름:', userInfo.name);
      console.log('비밀번호:', password);
      alert('저장되었습니다.');
    } else {
      alert('새 비밀번호가 현재 비밀번호와 같습니다. 다른 비밀번호를 입력해주세요.');
    }
    setUserInfo((prev) => ({ ...prev, showPasswordChange: false }));
  };

  return (
    <Container sx={{ width: '100%', height: '100%' }}>
      <BoxPosition>
        <OptionsButton />
      </BoxPosition>
      <BoxCenter>
        <ProfilePicture onUpload={handleUpload} />
      </BoxCenter>
      <ProfileInfo
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        onPasswordChangeClick={handlePasswordChangeClick}
        onSave={handleSave}
      />
    </Container>
  );
}

// 프로필 사진 컴포넌트
const ProfilePicture = ({ onUpload }) => {
  const handleFileChange = (event) => {
    onUpload(event.target.files[0]);
  };

  return (
    <IconButton component="label">
      <Avatar src="프로필 사진 URL" alt="프로필 사진" sx={{ width: 250, height: 250 }} />
      <input type="file" hidden onChange={handleFileChange} />
    </IconButton>
  );
};

// 프로필 정보 컴포넌트
const ProfileInfo = ({ userInfo, setUserInfo, onPasswordChangeClick, onSave }) => {
  return (
    <BoxWrapper>
      <Stack spacing={4} fontSize={18}>
        <BoxItem>
          <Label>이름:</Label>
          <SignupTextField
            texttype={'id'}
            fieldname={userInfo.name}
            onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))}
            sx={{ flex: 1 }}
          />
        </BoxItem>
        <BoxItem>
          <Label>아이디:</Label>
          <div style={{ flex: 1, textAlign: 'left' }}>{userInfo.id}</div>
        </BoxItem>
        {userInfo.showPasswordChange && (
          <div>
            <BoxItem>
              <Label>현재 비밀번호:</Label>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <Label>{userInfo.currentPassword}</Label>
              </div>
            </BoxItem>
            <BoxItem>
              <Label>변경 비밀번호:</Label>
              <PasswordField
                texttype={'password'}
                fieldname={userInfo.currentPassword}
                onChange={(e) => setUserInfo((prev) => ({ ...prev, password: e.target.value }))}
                sx={{ flex: 1 }}
              />
            </BoxItem>
          </div>
        )}
        <BoxButtonContainer>
          <Button variant="contained" sx={{ width: '35%' }} onClick={onPasswordChangeClick}>
            비밀번호 변경
          </Button>
          <Button variant="contained" sx={{ width: '20%', mt: 2 }} onClick={onSave}>
            저장
          </Button>
        </BoxButtonContainer>
      </Stack>
    </BoxWrapper>
  );
};

// 옵션 버튼 컴포넌트
const OptionsButton = () => {
  return (
    <IconButton>
      <OptionsIcon sx={{ width: 40, height: 40 }} />
    </IconButton>
  );
};

// 사진 업로드 핸들러
const handleUpload = (file) => {
  console.log(file); // 사진 업로드 로직 추가 필요
};

// 스타일드 컴포넌트 정의
const BoxPosition = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
`;

const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20%;
`;

const BoxWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const BoxItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const BoxButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

const Label = styled.div`
  width: 45%;
  text-align: left;
`;

export default MyhomePage;
