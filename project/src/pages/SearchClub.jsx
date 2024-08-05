import React, { useState } from 'react';
import SideBarButton from '../components/SideBarButton';
import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import ContentContainer from '../components/ContentContainer';
import SearchItemContainer from '../components/SearchItemContainer';
import Layout from '../components/Layout';
import SearchClubModal from '../components/SearchClubModal';

const SearchClub = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <SideBarButton />
      <SearchBar />
      <FilterButton />
      <ContentContainer>
        <div onClick={handleOpenModal}>
          <SearchItemContainer />
        </div>
        <div onClick={handleOpenModal}>
          <SearchItemContainer />
        </div>
      </ContentContainer>
      <SearchClubModal show={showModal} handleClose={handleCloseModal}>
      </SearchClubModal>
    </Layout>
  );
};

export default SearchClub;