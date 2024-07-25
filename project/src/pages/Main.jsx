import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import CalendarComponent from "../components/Calendar";
import SideBar from "../components/Sidebar";
import sidebarpicture from '../assets/sidebar.png';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MainContainer>
      <SidebarButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <ButtonImage src={sidebarpicture} alt='button' />
      </SidebarButton>
      <CalendarComponent />
      <Announcement />
      {isSidebarOpen && (
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #5ABEF5;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const SidebarButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 10px;
  margin-bottom: 0;
  background: none;
  border: none;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;