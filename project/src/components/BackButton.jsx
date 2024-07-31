import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/back-icon.svg';

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

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBackClick}>
      <BackIcon width="100%" height="100%" />
    </Button>
  );
};

export default BackButton;