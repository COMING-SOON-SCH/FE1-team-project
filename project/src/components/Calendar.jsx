import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import 'react-calendar/dist/Calendar.css'
import Popup from "./Popup";
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const theme = {
  color: {
    pink: '#FFC0CB',
    brown: '#A52A2A',
    blue: '#0000FF',
    lime: '#00FF00'
  }
};

export default function CalendarComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    setData([
      {
        key: '1',
        title: '공식 과제 제출일',
        time: '2024-07-11'
      },
      {
        key: '2',
        title: '프로젝트 팀 미팅',
        time: '2024-07-16'
      }
    ])
  }, [])

  const onChange = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const selected = data.find((item) => item.time === formattedDate);
    setSelectedData(selected);
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  const ServerDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const formattedDate = day.format('YYYY-MM-DD');
    const isSelected = data.some(item => item.time === formattedDate);

    return (
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      >
        {day.date()}
        {isSelected && !outsideCurrentMonth && <RoundBox />}
      </PickersDay>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={onChange}
            slots={{
              day: ServerDay
            }}
          />
        </LocalizationProvider>
        {showPopup && (
          <Popup
            data={selectedData}
            closePopup={closePopup}
          />
        )}
      </CalendarContainer>
    </ThemeProvider>
  )
}

const CalendarContainer = styled.div`
  width: 90%;
  height: 350px;
  margin-top: 5%;
  margin-left: 5%;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const RoundBox = styled.div`
  width: 7px;
  height: 7px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
`;