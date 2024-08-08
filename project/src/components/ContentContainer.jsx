import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 340px;
  height: 640px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  position: fixed;
  top: 21%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export default ContentContainer;