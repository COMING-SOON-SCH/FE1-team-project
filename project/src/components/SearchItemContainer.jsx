import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';
import SearchClubModal from '../components/SearchClubModal';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Container = styled.div`
  width: 300px;
  height: 260px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const SearchItemContainer = ({ searchTerm }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPromotionPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'searchClubPosts'));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllPosts(posts);
      setFilteredPosts(posts);
    };

    fetchPromotionPosts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredPosts(
        allPosts.filter(post =>
          post.clubName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(allPosts);
    }
  }, [searchTerm, allPosts]);

  const handleOpenModal = (clubName) => {
    const post = filteredPosts.find(post => post.clubName === clubName);
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