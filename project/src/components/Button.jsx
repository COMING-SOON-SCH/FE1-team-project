import styled from 'styled-components';

const Button = styled.button`
  width: 90px;
  padding: 10px 10px;
  font-size: 13px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &.sign-in {
    background-color: #A0DEFF;
    color: #000;
    box-shadow: 2px 2px 8px 0.5px rgba(97, 94, 252, 0.6);
  }
  &.sign-up {
    background-color: #CAF4FF;
    color: #000;
    box-shadow: 2px 2px 8px 0.5px rgba(90, 178, 255, 0.6);
  }
`;

export default Button;