import React from 'react';
import SideBarButton from '../components/SideBarButton';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';
import Layout from '../components/Layout';

const SearchClub = () => {
  return (
    <Layout>
      <SideBarButton />
      <SearchBar />
      <FilterButton />
      <ContentContainer>
          <SearchItemContainer />
          <SearchItemContainer />
      </ContentContainer>
    </Layout>
  );
};

export default SearchClub;