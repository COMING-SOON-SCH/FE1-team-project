import React from "react";
import Announcement from "../components/Announcement";
import CalendarComponent from "../components/Calendar";

export default function Main() {
  return (
    <div>
      <CalendarComponent />
      <Announcement />
    </div>
  );
}