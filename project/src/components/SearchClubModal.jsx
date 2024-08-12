import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const SearchClubModal = ({ show, handleClose, title, clubName, img, description }) => {
  const showHideClassName = show ? "display-block" : "display-none";
  const navigate = useNavigate();

  const handleClubNameClick = () => {
    navigate(`/club-profile/${encodeURIComponent(clubName)}`);
  };

  return (
    <>
      <StyledOverlay className={showHideClassName} onClick={handleClose} />
      <StyledModal className={showHideClassName}>
        <ModalMain>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <ContentBox>
            <Title>{title}</Title>
            <ClubName onClick={handleClubNameClick}>{clubName}</ClubName>
            <ImagePlaceholder>
              <img src={img} />
            </ImagePlaceholder>
            <Description>{description}</Description>
          </ContentBox>
          <ApplyButton>신청</ApplyButton>
        </ModalMain>
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 140px;
  width: 340px;
  height: 580px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
`;

const ModalMain = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ContentBox = styled.div`
  overflow-y: auto;
  height: 465px;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const ClubName = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  img {
    width: 284px;
    height: 200px;
    object-fit: cover;
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 20px;
  text-align: left;
`;

const ApplyButton = styled.button`
  && {
    font-family: 'MangoDdobak-B';
    font-size: 16px;
    position: absolute;
    top: 535px;
    left: 142.5px;
    width: 55px;
    height: 32px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;

export default SearchClubModal;