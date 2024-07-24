import { useState } from "react";
import Announcement from "../components/Announcement";
import CalendarComponent from "../components/Calendar";
import SideBar from "../components/Sidebar";
import sidebarpicture from '../assets/sidebar.png'

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={mainBackGround}>
      <button style={sidebarButtonStyle} onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
        <img src={sidebarpicture} alt='button' style={{ width: '100%', height: 'auto', margin: '0' }} />
      </button>
      <CalendarComponent />
      <Announcement />
      {
        isSidebarOpen ?
          <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          : null
      }
    </div>
  )
}

const mainBackGround = {
  background: '#5ABEF5',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center'
}

const sidebarButtonStyle = {
  width: '50px',
  height: '50px',
  margin: '10px',
  marginBottom: '0',
  background: 'none',
  border: 'none'
}