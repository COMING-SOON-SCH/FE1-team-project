import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';
import SearchClubModal from '../components/SearchClubModal';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Container = styled.div`
  width: 300px;
  height: 260px;
  background: #D9D9D9;
  border-radius: 10px;
`;

const SearchItemContainer = ({ searchTerm, sortType }) => {
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
    let sortedPosts = [...allPosts];

    if (sortType === 'latest') {
      sortedPosts.sort((a, b) => {
        const timeA = new Date(a.timeStamp);
        const timeB = new Date(b.timeStamp);
        return timeB - timeA || a.clubName.localeCompare(b.clubName);
      });
    } else if (sortType === 'popular') {
      sortedPosts.sort((a, b) => b.hits - a.hits || a.clubName.localeCompare(b.clubName));
    } else {
      sortedPosts.sort((a, b) => a.clubName.localeCompare(b.clubName));
    }

    if (searchTerm) {
      setFilteredPosts(
        sortedPosts.filter(post =>
          post.clubName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(sortedPosts);
    }
  }, [searchTerm, sortType, allPosts]);

  const handleOpenModal = async (clubName) => {
    const post = filteredPosts.find(post => post.clubName === clubName);

    if (post) {
      const postRef = doc(db, 'searchClubPosts', post.id);
      await updateDoc(postRef, {
        hits: post.hits + 1
      });

      setModalContent({ ...post, hits: post.hits + 1 });
      setShowModal(true);
    }
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