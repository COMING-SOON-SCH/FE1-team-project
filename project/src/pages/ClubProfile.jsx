import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ClubProfileTabs from '../components/ClubProfileTabs';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useParams } from 'react-router-dom';

const ClubProfile = () => {
  const { clubName } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      const clubProfilesRef = collection(db, 'clubProfiles');
      const q = query(clubProfilesRef, where('clubName', '==', decodeURIComponent(clubName)));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setClub(doc.data());
        });
      } else {
        console.log('데이터가 없습니다.');
      }
    };

    fetchClubData();
  }, [clubName]);

  if (!club) {
    return <div>로딩 중...</div>;
  }

  const { clubName: name, category, clubDescription, clubActivities, profilePic } = club;

  return (
    <Layout>
      <ProfileContainer>
        <TopArea>
          <ProfilePicWrapper src={profilePic} alt="Profile Picture" />
          <ClubInfoContainer>
            <ClubInfoTop>
              <ClubNameText>{name}</ClubNameText>
              <CategoryText>{category}</CategoryText>
            </ClubInfoTop>
            <ClubInfoBottom>
              <ClubDescriptionText>{clubDescription}</ClubDescriptionText>
              <ClubActivitiesText>{clubActivities}</ClubActivitiesText>
            </ClubInfoBottom>
          </ClubInfoContainer>
        </TopArea>
        <ClubProfileTabs clubName={name} />
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