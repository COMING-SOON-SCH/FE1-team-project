import styled from "styled-components";

export default function CalendarComponent() {
  return (
    <CalendarContainer>
      반갑습니다.
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div`
  borderRadius: 30px;
  width: 90%;
  height: 40%;
  marginTop: 5%;
  marginLeft: 5%;
  backgroundColor: white;
`;