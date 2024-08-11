import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const PostModal = ({ show, handleClose, title, postingTime, description }) => {
  const showHideClassName = show ? "display-block" : "display-none";

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
            <PostingTime>{postingTime}</PostingTime>
            <Description>{description}</Description>
          </ContentBox>
        </ModalMain>
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: auto;
  max-height: 480px;
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
  max-height: 455px;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
`;

const PostingTime = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  text-align: left;
  cursor: pointer;
`;

const Description = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: left;
`;

export default PostModal;