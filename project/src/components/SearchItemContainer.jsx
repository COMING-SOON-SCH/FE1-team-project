import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from '../components/SearchItem';
import SearchClubModal from '../components/SearchClubModal';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebaseConfig';

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
  const [defaultImage, setDefaultImage] = useState('');

  useEffect(() => {
    const fetchPromotionPosts = async () => {

      const logoRef = ref(storage, 'images/logo.svg');
      const logoUrl = await getDownloadURL(logoRef);
      setDefaultImage(logoUrl);

      const clubsSnapshot = await getDocs(collection(db, 'clubProfiles'));
      let posts = [];

      for (const clubDoc of clubsSnapshot.docs) {
        const clubData = clubDoc.data();
        const postsSnapshot = await getDocs(collection(db, 'clubProfiles', clubDoc.id, 'posts'));

        postsSnapshot.docs.forEach(postDoc => {
          const postData = postDoc.data();
          posts.push({
            id: postDoc.id,
            clubName: clubData.clubName,
            category: clubData.category,
            ...postData,
            imageUrl: postData.imageUrl || logoUrl, // 이미지 등록을 하지 않은 홍보글은 디폴트 이미지
            clubId: clubDoc.id,
          });
        });
      }

      setAllPosts(posts);
      setFilteredPosts(posts);
    };

    fetchPromotionPosts();
  }, []);

  useEffect(() => {
    let sortedPosts = [...allPosts];
  
    if (sortType === 'latest') {
      sortedPosts.sort((a, b) => {
        const timeA = new Date(a.postingTime);
        const timeB = new Date(b.postingTime);
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

  const handleOpenModal = async (clubName, postId, clubId) => {
    const post = filteredPosts.find(post => post.id === postId && post.clubId === clubId);

    if (post) {
      const postRef = doc(db, 'clubProfiles', clubId, 'posts', postId);
      await updateDoc(postRef, {
        hits: post.hits + 1,
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
        <Container key={index} onClick={() => handleOpenModal(post.clubName, post.id, post.clubId)}>
          <SearchItem
            image={post.imageUrl}
            clubName={post.clubName}
            category={post.category}
            description={post.postTitle}
          />
        </Container>
      ))}
      {modalContent && (
        <SearchClubModal
          show={showModal}
          handleClose={handleCloseModal}
          title={modalContent.postTitle}
          clubName={modalContent.clubName}
          img={modalContent.imageUrl}
          description={modalContent.postContent}
        />
      )}
    </>
  );
};

export default SearchItemContainer;