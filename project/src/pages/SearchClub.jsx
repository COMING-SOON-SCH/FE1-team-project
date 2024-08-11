import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';
import Layout from '../components/Layout';

const SearchClub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('name'); // 기본값은 이름순

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <FilterButton onSortChange={handleSortChange} />
      <ContentContainer>
        <ContentBox>
          <SearchItemContainer searchTerm={searchTerm} sortType={sortType} />
        </ContentBox>
      </ContentContainer>
    </Layout>
  );
};

const ContentBox = styled.div`
  height: 560px;
  margin-top: 35px;
  overflow-y: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export default SearchClub;