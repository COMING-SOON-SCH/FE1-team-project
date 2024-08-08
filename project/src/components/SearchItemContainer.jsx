import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';

const Container = styled.div`
  width: 300px;
  height: 260px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const SearchItemContainer = ({ searchTerm }) => {

  // 동아리 글
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
    </>
  );
};

export default SearchItemContainer;