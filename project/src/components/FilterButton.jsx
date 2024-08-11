import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FilterButtonContainer = styled.div`
  && {
  width: 393px;
  top: 136px;
  display: flex;
  position: fixed;
  }
`;

const OpenButton = styled(Button)`
  && {
    font-family: 'MangoDdobak-B';
    font-size: 12px;
    color: #000;
    border-radius: 24px;
    background-color: rgba(255, 255, 255, 0.7);
    left: 300px;
  }
`;

const SubMenu = styled(MenuItem)`
  && {
    font-family: 'MangoDdobak-B';
    font-size: 12px;
  }
`;

const FilterButton = ({ onSortChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSort, setCurrentSort] = useState('이름순'); // 기본값은 이름순
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (newSortType) => {
    const sortLabel = {
      latest: '최신순',
      popular: '인기순',
      name: '이름순',
    }[newSortType] || '이름순';

    setCurrentSort(sortLabel);
    onSortChange(newSortType);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FilterButtonContainer>
      <OpenButton
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {currentSort}
      </OpenButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <SubMenu onClick={() => handleMenuItemClick('latest')}>최신순</SubMenu>
        <SubMenu onClick={() => handleMenuItemClick('popular')}>인기순</SubMenu>
        <SubMenu onClick={() => handleMenuItemClick('name')}>이름순</SubMenu>
      </Menu>
    </FilterButtonContainer>
  );
};

export default FilterButton;