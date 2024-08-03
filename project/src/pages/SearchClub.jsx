import React from 'react';
import SideBarButton from '../components/SideBarButton';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';
import Layout from '../components/Layout';

const SearchClub = () => {
  return (
    <Layout>
      <SideBarButton />
      <SearchBar />
      <ContentContainer>
          <SearchItemContainer />
          <SearchItemContainer />
      </ContentContainer>
    </Layout>
  );
};

export default SearchClub;