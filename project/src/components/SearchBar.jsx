import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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

const SearchInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`;

const SearchButton = styled(IconButton)`
  padding: 10px;
`;

const SearchBar = () => {
  return (
    <SearchBox component="form">
      <SearchInput
      placeholder="동아리 찾기"
      inputProps={{ 'aria-label': 'search clubs' }}
      />
      <SearchButton type="button" aria-label="search">
      <SearchIcon />
      </SearchButton>
    </SearchBox>
  );
};
  
export default SearchBar;