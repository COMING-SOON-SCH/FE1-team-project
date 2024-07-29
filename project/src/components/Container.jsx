import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 393px;
  height: 100vh;
  color: #000;
  text-align: center;
  max-width: 393px;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;

  &.small-container {
  position: absolute;
  top: 20%;
  width: 360px;
  height: 700px;
  background-color: #fff;
  opacity: 0.6;
  box-shadow: 2px 2px 8px 0.5px rgba(220, 220, 220, 0.6);
  z-index: -1;
  }
`;

export default Container;