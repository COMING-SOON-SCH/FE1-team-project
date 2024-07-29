import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../css/Search.css';
import { yellow } from '@mui/material/colors';
import Container from '../components/Container';
import Background from '../components/Background';
import BackgroundFilter from '../components/BackgroundFilter';
import BackgroundCircle from '../components/BackgroundCircle';
import useInput from '../hooks/useInput';
import SearchBar from '../components/SearchBar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

const Search = () => {
    const input = useInput();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Container>
      <Background />
      <BackgroundFilter />
        <BackgroundCircle width="110px" height="110px" left="20%" top="85%" background="linear-gradient(#83b2ff, #67caff)" />
        <BackgroundCircle width="150px" height="150px" left="12%" top="40%" background="linear-gradient(#00fbff, #7961ff)" />
        <BackgroundCircle width="180px" height="180px" left="46%" top="65%" background="linear-gradient(#00ffd5, #00d9ff)" />
        <BackgroundCircle width="170px" height="170px" left="25%" top="5%" background="linear-gradient(#4EFFF8, #57FFD7)" />
        <BackgroundCircle width="140px" height="140px" left="55%" top="20%" background="linear-gradient(#4EFFF8, #69a2fe)" />
      
      <SearchBar />

      <Container className="small-container" />
        <div className="recruitment" onClick={handleOpen} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', marginTop: '20px' }}>
            모집
        </div>
        <div className="recruitment" onClick={handleOpen} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', marginTop: '20px' }}>
            모집
        </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title" variant="h6" component="h2">
            썬시아 상반기 모집
          </div>
          <div>
            썬시아
          </div>
          <div style={{width: '240px', height: '100px', backgroundColor: yellow}}>
            이미지
          </div>
          <p id="modal-modal-description">
            이다혜가 꿈인 사람들을 위한 동아리입니다.
          </p>
          <Button onClick={handleClose} style={{position: 'absolute', top: '10px', right: '5px'}}>X</Button>
          <Button style={{top: '150px', left: '110px', backgroundColor: 'aliceblue', borderRadius: '10px'}}>신청</Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default Search;