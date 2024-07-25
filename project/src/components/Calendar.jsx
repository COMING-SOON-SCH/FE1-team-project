import { useState } from "react";
import Calendar from "react-calendar";
import styled, { ThemeProvider } from "styled-components";
import 'react-calendar/dist/Calendar.css'
import moment from "moment";

export const theme = {
  color: {
    pink: '#FFC0CB',
    brown: '#A52A2A',
    blue: '#0000FF',
    lime: '#00FF00'
  }
};

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  const onChange = (date) => {
    setDate(date);
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  const dayList = [
    '2024-07-09',
  ];

  const addContent = ({ date }) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      contents.push(
        <>
          <RoundBox />
        </>
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer>
        <MyCalendar
          onChange={onChange}
          value={date}
          tileContent={addContent}
          showNeighboringMonth={false}
          formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })} />
        {showPopup && (
          <PopupOverlay onClick={closePopup}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closePopup}>&times;</CloseButton>
              <h3>선택된 날짜: {date.toDateString()}</h3>
            </PopupContent>
          </PopupOverlay>
        )}
      </CalendarContainer>
    </ThemeProvider>
  )
}

const CalendarContainer = styled.div`
  width: 90%;
  height: 520px;
  margin-top: 5%;
  margin-left: 5%;
  background-color: none;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;  // 추가된 부분
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const RoundBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: gray;
  border-radius: 50%;  // 완전한 원형으로 만들기
`;

const MyCalendar = styled(Calendar)`
  .react-calendar__navigation {
    background: ${({ theme }) => theme.color.pink};
    border-bottom: 4px solid ${({ theme }) => theme.color.brown};
    height: 90px;

    span {
      font-size: 24px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.brown};
    }
  }

  .react-calendar__navigation button:disabled {
    background-color: ${({ theme }) => theme.color.pink};
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${({ theme }) => theme.color.pink};
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__month-view {
    padding: 12px 32px;
    abbr {
      // 텍스트
      color: ${({ theme }) => theme.color.brown};
      font-size: 16px;
      font-weight: 500;
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      // 텍스트 부분
      font-size: 18px;
      font-weight: 900;
    }
  }

  .react-calendar__tile {
    text-align: center;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
/*hover, focus, 선택됐을 시 */
.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 14px;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.lime};
    border-radius: 14px;
  }
/*hover, focus 시 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 14px;
  }
`