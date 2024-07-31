import React from 'react';
import Background from '../components/Background';
import SideBarButton from '../components/SideBarButton';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';

const SearchClub = () => {
  return (
    <Background>
    <SideBarButton />
    <SearchBar />
    <ContentContainer>
        <SearchItemContainer />
        <SearchItemContainer />
    </ContentContainer>
    </Background>
  );
};

export default SearchClub;