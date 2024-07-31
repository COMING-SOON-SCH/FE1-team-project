import styled from 'styled-components';
import { ReactComponent as SideBarIcon } from '../assets/sidebar-icon.svg';

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const SideBarButton = () => {

  return (
    <Button>
      <SideBarIcon width="100%" height="100%" />
    </Button>
  );
};

export default SideBarButton;