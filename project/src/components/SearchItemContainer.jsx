import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';
import SearchClubModal from '../components/SearchClubModal';
import club1 from '../assets/club-img-1.jpg';

const Container = styled.div`
  width: 300px;
  height: 260px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const SearchItemContainer = ({ searchTerm }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const promotionPosts = [
    {
      image: club1,
      clubName: '동아리',
      category: '분야',
      title: '제목',
      modalDescription: '설명'
    },
    {
      image: club1,
      clubName: '썬시아',
      category: '예술',
      title: '썬시아 상반기 모집!',
      modalDescription: '이다혜가 꿈인 사람들을 위한 동아리입니다.'
    },
    {
      image: club1,
      clubName: '커밍순',
      category: '코딩',
      title: '커밍순 하반기 모집!',
      modalDescription: '순천향대 IT 서비스 개발 동아리입니다.'
    },
  ];

  useEffect(() => {
    if (searchTerm) {
      setFilteredPosts(
        promotionPosts.filter(post =>
          post.clubName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(promotionPosts);
    }
  }, [searchTerm]);

  const handleOpenModal = (clubName) => {
    const post = promotionPosts.find(post => post.clubName === clubName);
    setModalContent(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {filteredPosts.map((post, index) => (
        <Container key={index} onClick={() => handleOpenModal(post.clubName)}>
          <SearchItem
            image={post.image}
            clubName={post.clubName}
            category={post.category}
            description={post.title}
          />
        </Container>
      ))}
      {modalContent && (
        <SearchClubModal
          show={showModal}
          handleClose={handleCloseModal}
          title={modalContent.title}
          clubName={modalContent.clubName}
          img={modalContent.image}
          description={modalContent.modalDescription}
        />
      )}
    </>
  );
};

export default SearchItemContainer;