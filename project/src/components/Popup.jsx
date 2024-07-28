import styled from "styled-components";

export default function Popup({ closePopup, data }) {
  return (
    <PopupOverlay onClick={closePopup}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closePopup}>&times;</CloseButton>
        {
          data ?
            <div>
              <p>{data.time}</p>
              <h2>{data.title}</h2>
            </div>
            : <h2>이 날짜에는 아무런 계획이 없습니다.</h2>
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