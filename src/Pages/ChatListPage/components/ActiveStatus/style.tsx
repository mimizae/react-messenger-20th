import styled from "styled-components";

export const ActiveStatusLayout = styled.div`
    display: flex;
    padding: 12px 0;
    gap: 18px;
`;

export const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;

export const Photo= styled.img`
    display: flex;
    border-radius: 50%;
`

export const Name= styled.div`
    display: flex;
    font-size: 12px;
    color: #454C53;
`

export const StatusContainer = styled.div`
  position: relative; /* 부모 컨테이너를 relative로 설정 */
  display: inline-block; /* 이미지와 점을 함께 표시 */
`;

export const StatusDot = styled.div`
  position: absolute;
  bottom: 0px; /* 이미지 오른쪽 하단에 맞춰서 위치 조정 */
  right: 1px;
  width: 16px;
  height: 16px;
  background-color: #45D658;
  border-radius: 50%;
  z-index: 2; /* 사진 위에 표시될 수 있도록 z-index 설정 */
  border: 3px solid white;
`;