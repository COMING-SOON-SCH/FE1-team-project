import React, { useState } from 'react';
import SideBarButton from '../components/SideBarButton';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';
import Layout from '../components/Layout';

const SearchClub = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Layout>
      <SideBarButton />
      <SearchBar onSearch={handleSearch} />
      <FilterButton />
      <ContentContainer>
        <SearchItemContainer searchTerm={searchTerm} />
      </ContentContainer>
    </Layout>
  );
};

export default SearchClub;