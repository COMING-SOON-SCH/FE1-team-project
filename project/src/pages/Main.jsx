import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import CalendarComponent from "../components/Calendar";
import sidebarpicture from '../assets/sidebar.png';
import { Box, Drawer, Slide } from "@mui/material";
import SidebarItem from "../components/SidebarItem";

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MainContainer>
      <SidebarButton onClick={() => setIsSidebarOpen(true)} >
        <ButtonImage src={sidebarpicture} alt='button' />
      </SidebarButton>
      <CalendarComponent />
      <Announcement />
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
        TransitionComponent={Slide}
        transitionDuration={{ enter: 300, exit: 300 }}
      >
        <SidebarItem isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </Drawer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #5ABEF5;
  width: 100vw;
  height: 140vh;
`;

const SidebarButton = styled(Box)`
  width: 40px;
  height: 40px;
  padding: 10px 0px 0px 20px;
  background: none;
  border: none;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: auto;
`;
