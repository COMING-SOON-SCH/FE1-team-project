import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ClubProfileTabs from '../components/ClubProfileTabs';

const clubs = [
  {
    ClubName: "",
    Category: "",
    ClubDescription: "",
    ClubActivities: "",
    ProfilePic: "",
  },
  {
    ClubName: "썬시아",
    Category: "예술",
    ClubDescription: "순천향대학교 대표 치어리딩 동아리",
    ClubActivities: "예상활동: 치어리딩, 축제 공연",
    ProfilePic: "https://avatars.githubusercontent.com/u/141625960?v=4.png",
  },
  {
    ClubName: "커밍순",
    Category: "코딩",
    ClubDescription: "순천향대학교 IT 서비스 개발 동아리",
    ClubActivities: "스터디, 팀 프로젝트",
    ProfilePic: "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F738ca975-1a2c-47b8-ae1f-4febc2c083b9%2Fd82c57e8-45ff-4394-8990-4722f1facf23%2FKakaoTalk_20240229_213126094.jpg&blockId=df28e650-90dd-4478-bce2-7596c1c41040&width=256",
  },
  {
    ClubName: "리버티노",
    Category: "예술",
    ClubDescription: "오케스트라 동아리",
    ClubActivities: "매달 정기 공연",
    ProfilePic: "https://avatars.githubusercontent.com/u/175573826?s=200&v=4.png",
  },
];

const ClubProfile = () => {
  const [index, setIndex] = useState(1); // 불러올 동아리 프로필 인덱스 값
  const { ClubName, Category, ClubDescription, ClubActivities, ProfilePic } = clubs[index];

  return (
    <Layout>
      <ProfileContainer>
        <TopArea>
          <ProfilePicWrapper src={ProfilePic} alt="Profile Picture" />
          <ClubInfoContainer>
            <ClubInfoTop>
              <ClubNameText>{ClubName}</ClubNameText>
              <CategoryText>{Category}</CategoryText>
            </ClubInfoTop>
            <ClubInfoBottom>
              <ClubDescriptionText>{ClubDescription}</ClubDescriptionText>
              <ClubActivitiesText>{ClubActivities}</ClubActivitiesText>
            </ClubInfoBottom>
          </ClubInfoContainer>
        </TopArea>
        <ClubProfileTabs index={index} />
      </ProfileContainer>
    </Layout>
  );
};

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

const ProfilePicWrapper = styled.img`
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

const ClubNameText = styled.div`
  font-size: 20px;
  margin-left: 5px;
`;

const CategoryText = styled.div`
  font-size: 14px;
  margin-top: 1px;
  margin-left: 5px;
  color: #666;
`;

const ClubDescriptionText = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: left;
`;

const ClubActivitiesText = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: left;
`;

export default ClubProfile;