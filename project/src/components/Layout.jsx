import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
  width: 393px;
  height: 100vh;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 393px;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
`;

export default Layout;