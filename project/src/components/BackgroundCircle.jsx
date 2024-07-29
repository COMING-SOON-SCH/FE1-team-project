import styled from 'styled-components';

const BackgroundCircle = styled.div`
  position: absolute;
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '150px'};
  border-radius: 50%;
  z-index: -2;
  opacity: 0.8;
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
`;

export default BackgroundCircle;