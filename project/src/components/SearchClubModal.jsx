import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
//import Carousel from 'react-material-ui-carousel';

const SearchClubModal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "display-block" : "display-none";

  return (
    <>
      <StyledOverlay className={showHideClassName} onClick={handleClose} />
      <StyledModal className={showHideClassName}>
        <ModalMain>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Title>썬시아 상반기 모집!</Title>
          <Subtitle>썬시아</Subtitle>
          <ImagePlaceholder>이미지</ImagePlaceholder>
          <Description>이다혜가 꿈인 사람들을 위한 동아리입니다.</Description>
          <ApplyButton>신청</ApplyButton>
          {children}
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

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
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
`;

const Description = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 20px;
`;

const ApplyButton = styled.button`
  && {
    font-family: 'MangoDdobak-B';
    font-size: 16px;
    position: absolute;
    top: 500px;
    left: 142.5px;
    width: 55px;
    height: 32px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;

export default SearchClubModal;