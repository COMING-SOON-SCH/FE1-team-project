import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ClubProfileTabs from '../components/ClubProfileTabs';

const ClubProfile = () => {
  return (
    <Layout>
      <ProfileContainer>
        <TopArea>
            <ProfilePic />
            <ClubInfoContainer>
              <ClubInfoTop>
                <ClubName>썬시아</ClubName>
                <Category>예술</Category>
              </ClubInfoTop>
              <ClubInfoBottom>
                <ClubDescription>순천향대학교 대표 치어리딩 동아리</ClubDescription>
                <ClubActivities>예상활동: 치어리딩, 축제 공연</ClubActivities>
              </ClubInfoBottom>
            </ClubInfoContainer>
        </TopArea>
        <Tabs />
      </ProfileContainer>
    </Layout>
  );
}

const ProfileContainer = styled.div`
  width: 393px;
  height: 800px;
  position: fixed;
  top: 60px;
`;

const TopArea = styled.div`
  width: 340px;
  height: 180px;
  position: relative;
  top: 10px;
  margin: auto;
`;

const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: #D9D9D9;
  display: block;
  position: relative;
  top: 20px;
`;

const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClubInfoTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  position: absolute;
  top: 30px;
  left: 150px;
`;

const ClubInfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 182px;
  margin-top: 5px;
  margin-bottom: 5px;
  position: absolute;
  top: 60px;
  left: 154px;
`;

const ClubName = styled.div`
  font-size: 20px;
  margin-left: 5px;
`;

const Category = styled.div`
  font-size: 14px;
  margin-top: 1px;
  margin-left: 5px;
  color: #666;
`;

const ClubDescription = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: left;
`;

const ClubActivities = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: left;
`;

const Tabs = styled(ClubProfileTabs)`
  width: 340px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export default ClubProfile;