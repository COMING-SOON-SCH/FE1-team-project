import React from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';

const Container = styled.div`
  width: 300px;
  height: 260px;
  margin-top: 30px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const SearchItemContainer = () => {

  // 동아리 글
  const sampleContent = {
    image: '../assets/logo.svg',
    clubName: '썬시아',
    category: '체육',
    description: '썬시아 상반기 모집!'
  };

  return (
    <Container>
      <SearchItem
        image={sampleContent.image}
        clubName={sampleContent.clubName}
        category={sampleContent.category}
        description={sampleContent.description}
      />
    </Container>
  );
};

export default SearchItemContainer;