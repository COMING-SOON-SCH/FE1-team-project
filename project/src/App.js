import * as React from 'react';
import Main from './pages/Main';
import {Route, Routes } from 'react-router-dom';
import ClubProfile from './pages/ClubProfile'; // 기본 내보내기로 임포트
import MyhomePage from './pages/MyhomePage'; // 대소문자 일치
import Signup from './pages/Signup'; // 대소문자 일치


function App() {
  return (
    <div>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clubprofile" element={<ClubProfile />} />
        <Route path="/myhomepage" element={<MyhomePage />} />
      </Routes>
    </div >
  );
}
export default App;
