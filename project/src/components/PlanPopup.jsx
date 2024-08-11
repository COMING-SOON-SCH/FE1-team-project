import { Box, Button, Checkbox, Modal, TextField } from '@mui/material';
import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import usePostPlan from '../hooks/usePostPlan';
import useFetchPlanState from '../hooks/useFetchPlanState';
import useDeletePlan from '../hooks/useDeletePlan';

export default function PlanPopup({ closePopup, data, showPopup, selectedTime, setData }) {
  const [isClicked, setIsClicked] = useState(false);
  const [planToAdd, setPlanToAdd] = useState("");
  const { postPlan, isError } = usePostPlan();
  const deletePlan = useDeletePlan();
  const fetchPlanState = useFetchPlanState();

  const handleAddPlan = (e) => {
    if (planToAdd !== '') {
      const dateParts = selectedTime.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼야 함
      const day = parseInt(dateParts[2], 10);
      const date = new Date(year, month, day);
      const firebaseTimestamp = Timestamp.fromDate(date);

      const planData = {
        date: firebaseTimestamp,
        plans: planToAdd,
        state: false,
      }

      postPlan(planData);
      setData(prevData => [...prevData, planData]);
      if (isError) alert('데이터베이스에 계획 추가 중 오류 발생');
    }

    setIsClicked(false);
    setPlanToAdd('');
  };

  const handleCheckboxChange = (plan) => {
    plan.state = !plan.state;
    setPlanToAdd(prev => prev + 1)
    fetchPlanState(plan)
  }

  const handleDeletePlan = (plan) => {
    // `plans` 속성을 기준으로 일치하는 요소의 인덱스 찾기
    const updatedData = data.filter((item) => item.plans !== plan.plans);
    // 인덱스가 존재하면 해당 인덱스의 요소 삭제
    setData(updatedData);

    deletePlan(plan)
  }

  return (
    <Modal
      open={showPopup}
      onClose={closePopup}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PopupContainer>
        <ContentsBox>
          <Time>{selectedTime}</Time>
          {
            data.length ? data.map((plan) => (
              <PlanContainer key={plan.plans}>
                <Checkbox
                  checked={plan.state}
                  onChange={() => handleCheckboxChange(plan)}
                />
                <Plan key={data.plans} completed={plan.state}>{plan.plans}</Plan>
                <DeleteButton onClick={() => handleDeletePlan(plan)}>
                  <p>&times;</p>
                </DeleteButton>
              </PlanContainer>
            ))
              : <PlanContainer>
                <Plan>No Plan</Plan>
              </PlanContainer>
          }
        </ContentsBox>
        <AnimatedContainer isClicked={isClicked}>
          {!isClicked ? (
            <AddButton variant="outlined" onClick={() => setIsClicked(true)}>+</AddButton>
          ) : (
            <InputContainer>
              <StyledTextField
                onChange={(e) => setPlanToAdd(e.target.value)}
                autoFocus
              />
              <AddPlanButton variant="contained" onClick={handleAddPlan}>추가</AddPlanButton>
            </InputContainer>
          )}
        </AnimatedContainer>
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

const ContentsBox = styled(Box)`
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

const PlanContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px 0px 0px;
`;

const Plan = styled.h2`
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
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
  margin: 15px;
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

const DeleteButton = styled.button`
  background: none;
  border: none;
  width: 26px;
  height: 26px;
  padding: 0;

  p{
    font-size: 24px;
    margin: 0;
  }
`