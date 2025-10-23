import styled from "styled-components";
import type { ButtonProps } from "../types/types";
import { lightTheme } from "../assets/config/theme";

const Button: React.FC<ButtonProps> = ({ active = false, title, onClick }) => {
  return (
    <StyledButton $active={active} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.PrimaryBlue600 : theme.PrimaryGray300};
  background-color: ${({ theme, $active }) =>
    $active ? theme.PrimaryBlue600 : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? lightTheme.PrimaryBaseWhite : theme.PrimaryBaseBlack};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.PrimaryBlue600 : theme.PrimaryGray300};
  }
`;
