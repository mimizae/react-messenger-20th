import React from "react";
import { LoadingContainer, DotContainer, Dot } from "./style";

const LoadingSpinner: React.FC = () => {
  return (
    <LoadingContainer>
      서비스 준비 중입니다!🩵
      <DotContainer>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </DotContainer>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
