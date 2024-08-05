import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

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
}

const ClubProfileTaps = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <p>✨안녕하세요 순천향대학교 대표 치어리딩 동아리 썬시아입니다✨</p>
        <p>24년도 피닉시아 축제에서 첫 공연으로 여러분과 만날 수 있게 되었습니다🤗</p>

        <p>축제 분위기를 끌어올려줄 정말 신나고 다양한 좋은 곡들이 준비되어 있습니다😙🎶</p>

        <p>▫️일시 : 5월 31일 (금) PM 7:00<br/>
        ▫️장소 : 피닉시아 축제 야외 공연장</p>

        <p>공연을 보러와주신 여러분들을 위한
        추첨 이벤트도 준비되어 있으니,
        많은 관심과 응원 부탁드립니다 🫶🏻</p>

        <p>☁️INSTAGRAM : https://www.instagram.com/썬시아</p>

        <p>☁️문의<br/>
        회장 ㅇㅇㅇ 💛 010 - 1234 - 5678<br/>
        부회장 ㅇㅇㅇ 💛 010 - 9876 - 5432</p>
      </CustomTabPanel>
      <CustomTabPanel id="GalleryPanel" value={value} index={1}>
          <RecentPhotosSection>
            <PhotosGrid>
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 2" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 3" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 4" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 5" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 6" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 7" />
              <Photo src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 8" />
            </PhotosGrid>
          </RecentPhotosSection>
      </CustomTabPanel>
      <CustomTabPanel id="PostPanel" value={value} index={2}>
        <PostBoard>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </PostBoard>
      </CustomTabPanel>
    </TabSectionContainer>
  );
}

const TabSectionContainer = styled.div`
  width: 340px;
  height: 560px;
  overflow-y: auto;
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

export default ClubProfileTaps;