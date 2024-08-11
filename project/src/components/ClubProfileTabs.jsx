import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Zoom from '@mui/material/Zoom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { orderBy } from 'firebase/firestore';
import GalleryModal from './GalleryModal';
import PostModal from './PostModal';
import GalleryAddModal from './GalleryAddModal'; 
import PostAddModal from './PostAddModal';

const ClubProfileTabs = ({ clubName }) => {
  const [value, setValue] = useState(0);
  const [introduction, setIntroduction] = useState('');
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedPostTitle, setSelectedPostTitle] = useState('');
  const [selectedPostingTime, setSelectedPostingTime] = useState('');
  const [selectedPostContent, setSelectedPostContent] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [showGalleryAddModal, setShowGalleryAddModal] = useState(false); 
  const [showPostAddModal, setShowPostAddModal] = useState(false);
  const [clubId, setClubId] = useState('');

  useEffect(() => {
    const fetchTabData = async () => {
      const clubProfilesRef = collection(db, 'clubProfiles');
      const q = query(clubProfilesRef, where('clubName', '==', decodeURIComponent(clubName)));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const clubDocId = querySnapshot.docs[0].id;
        const clubDoc = querySnapshot.docs[0].data();

        setClubId(clubDocId);
        setIntroduction(clubDoc.introduction);

        await fetchPhotos(clubDocId);
        await fetchPosts(clubDocId);
      } else {
        console.log('동아리 데이터가 없습니다.');
      }
    };

    fetchTabData();
  }, [clubName]);

  const fetchPhotos = async (clubDocId) => {
    const photosCollectionRef = collection(db, 'clubProfiles', clubDocId, 'photos');
    const photosSnapshot = await getDocs(query(photosCollectionRef, orderBy('timestamp', 'desc')));
    setPhotos(photosSnapshot.docs.map(doc => ({
      url: doc.data().url,
      description: doc.data().description,
      timestamp: doc.data().timestamp,
    })));
  };

  const fetchPosts = async (clubDocId) => {
    const postsCollectionRef = collection(db, 'clubProfiles', clubDocId, 'posts');
    const postsSnapshot = await getDocs(query(postsCollectionRef, orderBy('postingTime', 'desc')));
    setPosts(postsSnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().postTitle,
      time: doc.data().postingTime,
      content: doc.data().postContent,
      imageUrl: doc.data().imageUrl || null,
    })));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePhotoClick = (photo) => {
    setSelectedImage(photo.url);
    setSelectedDescription(photo.description);
    setShowGalleryModal(true);
  };

  const handleCloseGalleryModal = () => {
    setShowGalleryModal(false);
  };

  const handlePostClick = (post) => {
    setSelectedPostTitle(post.title);
    setSelectedPostingTime(post.time);
    setSelectedPostContent(post.content);
    setSelectedImage(post.imageUrl);
    setShowPostModal(true);
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
  };

  const handleOpenGalleryAddModal = () => {
    setShowGalleryAddModal(true); 
  };

  const handleCloseGalleryAddModal = () => {
    setShowGalleryAddModal(false); 
  };

  const handleOpenPostAddModal = () => {
    setShowPostAddModal(true); 
  };

  const handleClosePostAddModal = () => {
    setShowPostAddModal(false); 
  };

  const handleGalleryUploadSuccess = async () => {
    await fetchPhotos(clubId);
  };

  const handlePostUploadSuccess = async () => {
    await fetchPosts(clubId);
  };

  const transitionDuration = {
    enter: 225,
    exit: 195,
  };

  return (
    <TabSectionContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <TabButton label="소개" />
          <TabButton label="갤러리" />
          <TabButton label="홍보글" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <IntroductionSection dangerouslySetInnerHTML={{ __html: introduction }} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RecentPhotosSection>
          <PhotosGrid>
            {photos.map((photo, idx) => (
              <Photo
                key={idx}
                src={photo.url}
                alt={`image ${idx + 1}`}
                onClick={() => handlePhotoClick(photo)}
              />
            ))}
          </PhotosGrid>
        </RecentPhotosSection>
        <Zoom
          in={value === 1}
          timeout={transitionDuration}
          unmountOnExit
        >
          <StyledFab onClick={handleOpenGalleryAddModal}>
            <AddIcon />
          </StyledFab>
        </Zoom>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PostBoard>
          {posts.map((post, idx) => (
            <Post
              key={idx}
              onClick={() => handlePostClick(post)}
            >
              <PostTitle>{post.title}</PostTitle>
              <PostingTime>{post.time}</PostingTime>
            </Post>
          ))}
        </PostBoard>
        <Zoom
          in={value === 2}
          timeout={transitionDuration}
          unmountOnExit
        >
          <StyledFab onClick={handleOpenPostAddModal}>
            <EditIcon />
          </StyledFab>
        </Zoom>
      </CustomTabPanel>

      {showGalleryModal && (
        <GalleryModal
          show={showGalleryModal}
          handleClose={handleCloseGalleryModal}
          image={selectedImage}
          description={selectedDescription}
        />
      )}

      {showPostModal && (
        <PostModal
          show={showPostModal}
          handleClose={handleClosePostModal}
          postTitle={selectedPostTitle}
          postingTime={selectedPostingTime}
          postContent={selectedPostContent}
          imageUrl={selectedImage}
        />
      )}

      {showGalleryAddModal && (
        <GalleryAddModal
          show={showGalleryAddModal}
          handleClose={handleCloseGalleryAddModal}
          clubId={clubId}
          onUploadSuccess={handleGalleryUploadSuccess}
        />
      )}

      {showPostAddModal && (
        <PostAddModal
          show={showPostAddModal}
          handleClose={handleClosePostAddModal}
          clubId={clubId}
          onUploadSuccess={handlePostUploadSuccess}
        />
      )}
    </TabSectionContainer>
  );
};

const CustomTabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <ContentBox>
          {children}
        </ContentBox>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TabSectionContainer = styled.div`
  width: 340px;
  height: 550px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: auto;
  position: relative;
  top: 20px;
  overflow: hidden;

  p {
    text-align: left;
    font-size: 14px;
  }
`;

const ContentBox = styled.div`
  overflow-y: auto;
  max-height: 460px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TabButton = styled(Tab)`
  && {
    width: 33.33%;
    font-family: 'MangoDdobak-B';
  }
`;

const IntroductionSection = styled.div`
  margin-bottom: 15px;
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
  margin-bottom: 15px;
`;

const Photo = styled.img`
  width: 100%;
  height: 145px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
`;

const PostBoard = styled.div`
  width: 280px;
  height: auto;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 15px;
  align-items: center;
`;

const Post = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 8px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostTitle = styled.div`
  margin: 22px auto 0px 20px;
  font-size: 14px;
`;

const PostingTime = styled.div`
  margin: 10px auto 0px 20px;
  color: #666;
  font-size: 12px;
`;

const StyledFab = styled(Fab)`
  && {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 900;
    background-color: #4bc0ff;
    color: white;
    &:hover {
      background-color: #33b8ff;
    }
  }
`;

export default ClubProfileTabs;