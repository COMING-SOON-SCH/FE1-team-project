import * as React from 'react';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import ClubProfile from './pages/ClubProfile';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ClubProfile />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div >
  )
}

export default App;