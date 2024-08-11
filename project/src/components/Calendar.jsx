import { useEffect, useState } from "react";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css'
import PlanPopup from "./PlanPopup";
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import useGetAllPlan from "../hooks/useGetAllPlan";
import dayjs from "dayjs";

export default function CalendarComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { allPlan, getAllPlan, isError } = useGetAllPlan();

  useEffect(() => {
    getAllPlan();
    console.log('데이터 불러오기')
  }, [showPopup, selectedData])

  const onChange = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    setSelectedTime(formattedDate);
    const selected = allPlan.filter((item) => dayjs(item.date.toDate()).format('YYYY-MM-DD') === formattedDate);
    setSelectedData(selected);
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  const ServerDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const formattedDate = day.format('YYYY-MM-DD');
    const isSelected = allPlan.some(item => dayjs(item.date.toDate()).format('YYYY-MM-DD') === formattedDate);

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

  if (isError) {
    console.log('데이터 불러오는 도중 오류 발생')
  }

  return (
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
        <PlanPopup
          closePopup={closePopup}
          data={selectedData}
          showPopup={showPopup}
          selectedTime={selectedTime}
          setData={setSelectedData}
        />
      )}
    </CalendarContainer>
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