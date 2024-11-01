import styled, { keyframes } from "styled-components";

export const dotsAnimation = keyframes`
  0%, 20% {
    opacity: 0.1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #333;
  margin-top: 100px;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dot = styled.span`
  display: flex;
  margin: 0 2px;
  font-size: 50px;
  animation: ${dotsAnimation} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;