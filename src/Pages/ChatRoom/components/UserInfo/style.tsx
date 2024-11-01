import styled from "styled-components";

export const UserInfoContainer = styled.div`
    display: flex;
    margin-bottom: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const Address = styled.p`
    color: var(--gray-scale-400, #9EA4AA);
`;

export const BigProfileImg = styled.img`
    display: flex;
    width: 102px;
    height: 102px;
`;

export const StatusDot = styled.div`
  position: absolute;
  bottom: 1px; /* 이미지 오른쪽 하단에 맞춰서 위치 조정 */
  right: 6px;
  width: 25px;
  height: 25px;
  background-color: #45D658;
  border-radius: 50%;
  z-index: 2; /* 사진 위에 표시될 수 있도록 z-index 설정 */
  border: 3.5px solid white;
`;