import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import styled from "styled-components";

export default function Popup({ closePopup, data, showPopup, selectedTime }) {
  return (
    <Modal
      open={showPopup}
      onClose={closePopup}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {data ?
        data.detail ?
          <AnnouncementPopup>
            <Time>{selectedTime}</Time>
            <Title>{data.title}</Title>
            {data.detail ?
              <DetailContent>
                {
                  data.detail.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
                }
              </DetailContent>
              : null
            }
          </AnnouncementPopup>
          : <PlanPopup>
            <Time>{selectedTime}</Time>
            <Title>{data.plans}</Title>
            <Button style={{ marginBottom: '10px' }} variant="outlined">+</Button>
          </PlanPopup>
        : <PlanPopup>
          <Time>{selectedTime}</Time>
          <Title>No Plan</Title>
          <Button style={{ marginBottom: '10px' }} variant="outlined">+</Button>
        </PlanPopup>
      }
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
`

const AnnouncementPopup = styled(PopupContainer)`
  width: 80%;
  height: auto;
`

const PlanPopup = styled(PopupContainer)`
  border-radius: 20%;
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
  padding: 0px 0px 0px 10px;
`;

const DetailContent = styled.div`
  padding: 0px 0px 0px 10px;
`;
