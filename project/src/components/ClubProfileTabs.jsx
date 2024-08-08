import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const clubDetails = [
  {
    Introduction: "",
    Photos: [],
    Posts: [],
  },
  {
    Introduction: (
      <>
        <p>✨안녕하세요 순천향대학교 대표 치어리딩 동아리 썬시아입니다✨</p>
        <p>24년도 피닉시아 축제에서 첫 공연으로 여러분과 만날 수 있게 되었습니다🤗</p>
        <p>축제 분위기를 끌어올려줄 정말 신나고 다양한 좋은 곡들이 준비되어 있습니다😙🎶</p>
        <p>▫️일시 : 5월 31일 (금) PM 7:00<br/>
        ▫️장소 : 피닉시아 축제 야외 공연장</p>
        <p>공연을 보러와주신 여러분들을 위한 추첨 이벤트도 준비되어 있으니,
        많은 관심과 응원 부탁드립니다 🫶🏻</p>
        <p>☁️INSTAGRAM : https://www.instagram.com/썬시아</p>
        <p>☁️문의<br/>
        회장 ㅇㅇㅇ 💛 010 - 1234 - 5678<br/>
        부회장 ㅇㅇㅇ 💛 010 - 9876 - 5432</p>
      </>
    ),
    Photos: [
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
    ],
    Posts: [
      { PostTitle: "2024-2 썬시아 신입 부원 모집", PostingTime: "2024-08-01" },
      { PostTitle: "피닉시아 축제 공연 일정 공지", PostingTime: "2024-04-15" },
      { PostTitle: "썬시아 1학기 정기 공연 안내", PostingTime: "2024-04-02" },
      { PostTitle: "1학기 연습 일정표", PostingTime: "2024-03-15" },
    ],
  },
  {
    Introduction: (
      <>
        <p>안녕하세요 순천향대학교 IT 개발 서비스 동아리 커밍순입니다👩🏻‍💻</p>
        <p>2024년도 2학기에 함께 할 신입 부원을 모집하고 있습니다</p>
        <p>많은 지원 부탁드립니다😊</p>
        <p>☁️INSTAGRAM : https://www.instagram.com/커밍순</p>
        <p>☁️문의<br/>
        회장 ㅇㅇㅇ 📞 010 - 1234 - 5678<br/>
        부회장 ㅇㅇㅇ 📞 010 - 1111 - 2222</p>
      </>
    ),
    Photos: [
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
    ],
    Posts: [
      { PostTitle: "프로젝트 팀 배정 공지", PostingTime: "2024-05-07" },
      { PostTitle: "정기 세미나 일정 안내", PostingTime: "2024-03-15" },
      { PostTitle: "3/18 OT 공지", PostingTime: "2024-03-12" },
      { PostTitle: "2024-1 커밍순 신입 부원 모집", PostingTime: "2024-03-04" },
    ],
  },
  {
    Introduction: (
      <>
        <p>🎻2학기 리버티노 부원 모집🎻</p>
        <p>안녕하세요 오케스트라 동아리 리버티노입니다🎶</p>
        <p>2학기에 2회의 정기 공연을 목표로 하고 있습니다😊<br />
        모집 부문은 바이올린, 비올라, 첼로, 피아노, 플룻, 클라리넷 등 그 외 악기는 문의주세요!</p>
        <p>☁️INSTAGRAM : https://www.instagram.com/리버티노</p>
        <p>☁️문의<br />
        회장 ㅁㅁㅁ 💟 010 - 9999 - 8888<br />
        부회장 ㅁㅁㅁ 💟 010 - 5555 - 2222</p>
      </>
    ),
    Photos: [
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
    ],
    Posts: [
      { PostTitle: "2차 정기 공연 일정 공지", PostingTime: "2024-06-01" },
      { PostTitle: "1차 정기 공연 일정 공지", PostingTime: "2024-04-26" },
      { PostTitle: "2024-1 부원 추가 모집 안내", PostingTime: "2024-03-04" },
      { PostTitle: "1학기 리버티노 신입 부원 모집", PostingTime: "2024-02-20" },
    ],
  },
];

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <ScrollableBox><Box sx={{ p: 3 }}>{children}</Box></ScrollableBox>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ClubProfileTabs = ({ index }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { Introduction, Photos, Posts } = clubDetails[index];

  return (
    <TabSectionContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <TabButton label="소개" {...a11yProps(0)} />
          <TabButton label="갤러리" {...a11yProps(1)} />
          <TabButton label="홍보글" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel id="IntroductionPanel" value={value} index={0}>
        {Introduction}
      </CustomTabPanel>
      <CustomTabPanel id="GalleryPanel" value={value} index={1}>
        <RecentPhotosSection>
          <PhotosGrid>
            {Photos.map((photo, idx) => (
              <Photo key={idx} src={photo} alt={`image ${idx + 1}`} />
            ))}
          </PhotosGrid>
        </RecentPhotosSection>
      </CustomTabPanel>
      <CustomTabPanel id="PostPanel" value={value} index={2}>
        <PostBoard>
          {Posts.map((post, idx) => (
            <Post key={idx}>
              <PostTitle>{post.PostTitle}</PostTitle>
              <PostingTime>{post.PostingTime}</PostingTime>
            </Post>
          ))}
        </PostBoard>
      </CustomTabPanel>
    </TabSectionContainer>
  );
};

const TabSectionContainer = styled.div`
  width: 340px;
  height: 560px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: auto;
  position: relative;
  top: 20px;

  #IntroductionPanel {
    p {
      text-align: left;
      font-size: 14px;
    }
  }
`;

const ScrollableBox = styled(Box)`
  height: 485px;
  overflow-y: auto;
`;

const TabButton = styled(Tab)`
  && {
  width: 33.33%;
  font-family: 'MangoDdobak-B';
  }
`;

const RecentPhotosSection = styled.div`
  margin: 0 auto;
  padding: 0;
  background: none;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Photo = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`;

const PostBoard = styled.div`
  width: 280px;
  height: auto;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Post = styled.div`
  width: 280px;
  height: 80px;
  border-radius: 8px;
  background-color: #D9D9D9;
`;

export default ClubProfileTabs;