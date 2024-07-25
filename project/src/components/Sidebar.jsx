import React from "react";
import styled from "styled-components";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <>
      <Overlay isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      <SidebarContainer isOpen={isSidebarOpen}>
        <CloseButton onClick={() => setIsSidebarOpen(false)}>&times;</CloseButton>
        <SidebarContent>
          <SidebarTitle>사이드바 메뉴</SidebarTitle>
          <SidebarList>
            <SidebarItem>메뉴 항목 1</SidebarItem>
            <SidebarItem>메뉴 항목 2</SidebarItem>
            <SidebarItem>메뉴 항목 3</SidebarItem>
          </SidebarList>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 200;
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

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  margin-bottom: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;