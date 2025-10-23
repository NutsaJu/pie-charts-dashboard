import React from "react";
import styled, { keyframes } from "styled-components";
import type { LoaderProps } from "../types/types";

const Loader: React.FC<LoaderProps> = ({ size = 48, color, fullscreen }) => {
  const spinner = (
    <Spinner
      $size={size}
      $color={color}
      role="status"
      aria-label="Loading..."
    />
  );

  if (fullscreen) {
    return (
      <FullscreenWrapper>
        {spinner}
      </FullscreenWrapper>
    );
  }

  return <Wrapper>{spinner}</Wrapper>;
};

export default Loader;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div<{ $size: number; $color?: string }>`
  border: ${({ $size }) => $size / 8}px solid
    ${({ theme }) => theme.PrimaryGray300};
  border-top: ${({ $size }) => $size / 8}px solid
    ${({ theme, $color }) => $color || theme.PrimaryBlue600};
  border-radius: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  animation: ${spin} 1s linear infinite;
`;

const FullscreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "rgba(17, 24, 39, 0.75)" : "rgba(255, 255, 255, 0.75)"};
  z-index: 9999;
`;