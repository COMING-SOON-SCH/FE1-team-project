import styled from 'styled-components';

const Background = ({ children }) => {
    return (
      <>
        <BackgroundBase />
        <BackgroundFilter />
        <BackgroundContainer>
            <BackgroundCircle width="130px" height="130px" left="15%" top="85%" background="linear-gradient(#83b2ff, #67caff)" />
            <BackgroundCircle width="150px" height="150px" left="12%" top="40%" background="linear-gradient(#00fbff, #7961ff)" />
            <BackgroundCircle width="300px" height="280px" left="75%" top="65%" background="linear-gradient(#00ffd5, #00d9ff)" />
            <BackgroundCircle width="200px" height="180px" left="-5%" top="-2%" background="linear-gradient(#4EFFF8, #57FFD7)" />
            <BackgroundCircle width="140px" height="140px" left="55%" top="20%" background="linear-gradient(#4EFFF8, #69a2fe)" />
            {children}
        </BackgroundContainer>
      </>
    );
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: #000;
  text-align: center;
  max-width: 393px;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
`;

const BackgroundBase = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(238, 244, 244);
  position: absolute;
  z-index: -3;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 120%;
  backdrop-filter: blur(40px);
  position: absolute;
  z-index: -1;
`;

const BackgroundCircle = styled.div`
  position: fixed;
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '150px'};
  border-radius: 50%;
  z-index: -2;
  opacity: 0.7;
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
  overflow: hidden;
`;

export default Background;