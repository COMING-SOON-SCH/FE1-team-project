import styled from 'styled-components';

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(40px);
  position: absolute;
  z-index: -1;
`;

export default BackgroundFilter;