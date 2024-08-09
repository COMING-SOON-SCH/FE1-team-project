import { Box, Modal } from "@mui/material";
import styled from "styled-components";

export default function AnnouncementPopup({ closePopup, data, showPopup }) {
  return (
    <Modal
      open={showPopup}
      onClose={closePopup}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <AnnouncementPopupContainer>
        <Time>{data.time}</Time>
        <Title>{data.title}</Title>
        {data.detail && (
          <DetailContent>
            {data.detail.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </DetailContent>
        )}
      </AnnouncementPopupContainer>
    </Modal >
  )
}

const AnnouncementPopupContainer = styled(Box)`
  position: absolute;
  border-radius: 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid #000;
  width: 80%;
  height: auto;
`

const Time = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0px;
  padding: 20px 0px 0px 10px;
`;

const Title = styled.h2`
  padding: 0px 0px 0px 10px;
`;

const DetailContent = styled.div`
  padding: 0px 0px 0px 10px;
`;