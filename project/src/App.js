import * as React from 'react';
import './index.css'
import Main from './pages/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import ClubProfile from './pages/ClubProfile'; // 기본 내보내기로 임포트
import MyhomePage from './pages/MyhomePage'; // 대소문자 일치
import styled from 'styled-components';
import MakeClub from './pages/MakeClub';
import sidebarpicture from './assets/sidebar.png';
import { Box, Drawer, Slide } from "@mui/material";
import SidebarItem from "./components/SidebarItem";
import Background from './components/Background';
import SignUp from './pages/SignUp';
import SearchClub from './pages/SearchClub';
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const location = useLocation();
  const hiddenSidebarPaths = ['/', '/signin', '/signup']; // 사이드바 버튼을 숨길 페이지

  return (
    <Background>
      {!hiddenSidebarPaths.includes(location.pathname) && (
        <SidebarButton onClick={() => setIsSidebarOpen(true)} >
          <ButtonImage src={sidebarpicture} alt='button' />
        </SidebarButton>
      )}
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
        TransitionComponent={Slide}
        transitionDuration={{ enter: 300, exit: 300 }}
      >
        <SidebarItem isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </Drawer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/club-profile/:clubName" element={<ClubProfile />} />
        <Route path="/myhomepage" element={<MyhomePage />} />
        <Route path="/makeclub" element={<MakeClub />} />
        <Route path="/search-club" element={<SearchClub />} />
      </Routes>
    </Background>
  );
}

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


export default App;
