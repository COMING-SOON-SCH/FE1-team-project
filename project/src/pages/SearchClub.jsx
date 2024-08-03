import React from 'react';
import Background from '../components/Background';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';

const SearchClub = () => {
  return (
    <Background>
    <SearchBar />
    <ContentContainer>
        <SearchItemContainer />
        <SearchItemContainer />
    </ContentContainer>
    </Background>
  );
};

export default SearchClub;