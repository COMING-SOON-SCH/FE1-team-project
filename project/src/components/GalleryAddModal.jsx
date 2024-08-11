import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '../assets/upload-icon.png';
import TextField from '@mui/material/TextField';
import { storage, db } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

const GalleryAddModal = ({ show, handleClose, clubId, onUploadSuccess }) => {
  const showHideClassName = show ? "display-block" : "display-none";
  const [uploadedImage, setUploadedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleUpload = async () => {
    if (imageFile && description) {
      const imageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
  
      const photosCollectionRef = collection(db, 'clubProfiles', clubId, 'photos');
      await addDoc(photosCollectionRef, {
        url: imageUrl,
        description: description,
        timestamp: serverTimestamp(),
      });
  
      setUploadedImage(null);
      setDescription('');
      setImageFile(null);
      handleClose();
      onUploadSuccess();
    }
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
            <ImageBox>
              {uploadedImage ? (
                <UploadedImage src={uploadedImage} alt="Uploaded" />
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="imageUpload">
                    <UploadIconImage src={UploadIcon} alt="Upload Icon" />
                  </label>
                </>
              )}
            </ImageBox>
            <StyledTextField
              label=""
              multiline
              rows={6}
              placeholder="내용을 입력하세요"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContentBox>
          <UploadButton onClick={handleUpload}>등록</UploadButton>
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
  height: 480px;
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

const ImageBox = styled.div`
  width: 284px;
  height: 200px;
  background-color: #D3D3D3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;

  label {
    cursor: pointer;
  }
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadIconImage = styled.img`
  width: 60px;
  height: 60px;
`;

const StyledTextField = styled(TextField)`
  width: 284px;
  position: relative;
  top: 20px;

  .MuiInputBase-root {
    font-family: 'MangoDdobak-B';
  }

  .MuiInputBase-inputMultiline {
    font-family: 'MangoDdobak-B';
  }
`;

const UploadButton = styled.button`
  && {
    font-family: 'MangoDdobak-B';
    font-size: 16px;
    position: absolute;
    top: 420px;
    left: 142.5px;
    width: 55px;
    height: 32px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;

export default GalleryAddModal;