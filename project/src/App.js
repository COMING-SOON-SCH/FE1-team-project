import * as React from 'react';
import './index.css'
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import ClubProfile from './pages/ClubProfile'; // 기본 내보내기로 임포트
import MyhomePage from './pages/MyhomePage'; // 대소문자 일치
import Signup from './pages/Signup'; // 대소문자 일치
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clubprofile" element={<ClubProfile />} />
        <Route path="/myhomepage" element={<MyhomePage />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  opacity: 1;
`

export default App;
