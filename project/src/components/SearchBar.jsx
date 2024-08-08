import React, { useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
    flex: 1;
  }
`;

const SearchButton = styled(IconButton)`
  padding: 10px;
`;

const clubs = [
  { ClubName: "썬시아" },
  { ClubName: "커밍순" },
  { ClubName: "리버티노" },
];

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <SearchBox component="form" onSubmit={e => e.preventDefault()}>
      <Autocomplete
        freeSolo
        id="combo-box"
        options={clubs.map((club) => club.ClubName)}
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