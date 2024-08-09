import { Box, Button, Modal, TextField } from '@mui/material';
import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import usePostPlan from '../hooks/usePostPlan';

export default function PlanPopup({ closePopup, data, showPopup, selectedTime }) {
  const [isClicked, setIsClicked] = useState(false);
  const [planToAdd, setPlanToAdd] = useState("");
  const { postPlan, isError } = usePostPlan()

  const handleAddPlan = (e) => {
    const dateParts = selectedTime.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼야 함
    const day = parseInt(dateParts[2], 10);
    const date = new Date(year, month, day);
    const firebaseTimestamp = Timestamp.fromDate(date);

    const planData = {
      date: firebaseTimestamp,
      plans: planToAdd
    }

    postPlan(planData);
    data.push(planData);
    setIsClicked(false);
    if (isError) alert('데이터베이스에 계획 추가 중 오류 발생');
  };

  return (
    <Modal
      open={showPopup}
      onClose={closePopup}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PopupContainer>
        {data.length ?
          <div>
            <div>
              <Time>{selectedTime}</Time>
              {
                data.map((data) => (
                  <Title key={data.plans}>{data.plans}</Title>
                ))
              }
            </div>
            <AnimatedContainer isClicked={isClicked}>
              {!isClicked ? (
                <AddButton variant="outlined" onClick={() => setIsClicked(true)}>+</AddButton>
              ) : (
                <InputContainer>
                  <StyledTextField
                    value={planToAdd}
                    onChange={(e) => setPlanToAdd(e.target.value)}
                    autoFocus
                  />
                  <AddPlanButton variant="contained" onClick={handleAddPlan}>추가</AddPlanButton>
                </InputContainer>
              )}
            </AnimatedContainer>
          </div>
          :
          <div>
            <Time>{selectedTime}</Time>
            <Title>No Plan</Title>
            <AnimatedContainer isClicked={isClicked}>
              {!isClicked ? (
                <AddButton variant="outlined" onClick={() => setIsClicked(true)}>+</AddButton>
              ) : (
                <InputContainer>
                  <StyledTextField
                    value={planToAdd}
                    onChange={(e) => setPlanToAdd(e.target.value)}
                    autoFocus
                  />
                  <AddPlanButton variant="contained" onClick={handleAddPlan}>추가</AddPlanButton>
                </InputContainer>
              )}
            </AnimatedContainer>
          </div>
        }
      </PopupContainer>
    </Modal>
  )
}

const PopupContainer = styled(Box)`
  position: absolute;
  border-radius: 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid #000;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Time = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0px;
  padding: 20px 0px 0px 0px;
`;

const Title = styled.h2`
  padding: 0px 0px 0px 0px;
`;

const expandAnimation = keyframes`
  from {
    width: 40px;
  }
  to {
    width: 300px;
  }
`;

const AnimatedContainer = styled.div`
  width: ${props => props.isClicked ? '300px' : '40px'};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease-in-out;
  animation: ${props => props.isClicked ? expandAnimation : 'none'} 1s ease-in-out;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled(Button)`
  width: 100%;
  height: 40px;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
  & .MuiInputBase-root {
    height: 40px;
  }
`;

const AddPlanButton = styled(Button)`
  height: 40px;
  width: 25%;
`;