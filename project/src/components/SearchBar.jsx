import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const SearchBox = styled(Paper)`
  && {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 335px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    position: fixed;
    top: 70px;
    box-shadow: none;
  }
`;

const SearchInput = styled(TextField)`
  && {
    font-family: 'MangoDdobak-B';
    margin-left: 8px;
    width: 280px;
    flex: 1;

    .MuiInputBase-root {
      padding: 0;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiInputBase-input {
      font-family: 'MangoDdobak-B';
    }
  }
`;

const SearchButton = styled(IconButton)`
  && {
    padding: 10px;
    margin-left: auto;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'searchClubPosts'));
        const clubNames = querySnapshot.docs.map(doc => doc.data().clubName);
        setClubs(clubNames);
      } catch (error) {
        console.error('오류 발생: ', error);
      }
    };

    fetchClubs();
  }, []);

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <SearchBox component="form" onSubmit={e => e.preventDefault()}>
      <Autocomplete
        freeSolo
        id="combo-box"
        options={clubs}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <SearchInput
            {...params}
            variant="outlined"
            placeholder="동아리 찾기"
            inputProps={{ ...params.inputProps, 'aria-label': 'search clubs' }}
          />
        )}
      />
      <SearchButton type="button" aria-label="search" onClick={handleSearchClick}>
        <SearchIcon />
      </SearchButton>
    </SearchBox>
  );
};

export default SearchBar;