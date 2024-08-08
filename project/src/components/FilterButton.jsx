import React from 'react';
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

const FilterButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FilterButtonContainer>
      <OpenButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        정렬
      </OpenButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <SubMenu onClick={handleClose}>최신순</SubMenu>
        <SubMenu onClick={handleClose}>인기순</SubMenu>
        <SubMenu onClick={handleClose}>이름순</SubMenu>
      </Menu>
    </FilterButtonContainer>
  );
}

export default FilterButton;