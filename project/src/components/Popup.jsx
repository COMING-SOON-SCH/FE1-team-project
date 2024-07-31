import React from 'react';
import styled from "styled-components";

export default function Popup({ closePopup, data }) {
  return (
    <PopupOverlay onClick={closePopup}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closePopup}>&times;</CloseButton>
        {
          data ?
            <div>
              <Time>{data.time}</Time>
              <Title>{data.title}</Title>
              {data.detail ?
                <DetailContent>
                  {data.detail.split('\n').map((line, index) => (
                    <DetailLine key={index}>{line}</DetailLine>
                  ))}
                </DetailContent>
                : null
              }
            </div>
            : <Title>No Plan</Title>
        }
      </PopupContent>
    </PopupOverlay>
  )
}

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
  text-align: left;
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
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

const Time = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DetailContent = styled.div`
  padding: 0px;
`;

const DetailLine = styled.p`
  margin: 0px 0;
`;