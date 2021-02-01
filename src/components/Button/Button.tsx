import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #e8e8e8;
  color: #1d1dff;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #d8d8d8;
  }

  ${({ primaryButton }: { primaryButton?: boolean }) =>
    primaryButton &&
    `
    background-color: #1d1dff;
    color: white;

    &:hover {
      background-color: #0000d2;
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: gray;
    cursor: not-allowed;
  `}

  ${({ fullWidth }: { fullWidth?: boolean }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`;

interface ButtonProps {
  onClick?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { disabled, children, onClick, fullWidth, primary } = props;
  return (
    <StyledButton
      onClick={onClick}
      primaryButton={primary}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
