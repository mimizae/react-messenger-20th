import styled from "styled-components";

interface SidebarContainerProps {
    $isOpen: boolean; // 사이드바의 열림 상태를 나타내는 prop
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); // 반투명 배경
  backdrop-filter: blur(2px); // 블러 효과
  z-index: 500; // 사이드바보다 아래에 표시되도록
  border-radius: 40px;
`;

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute; // 부모 요소에 상대적으로 위치
  top: 0; // 부모 요소의 위쪽에 맞추기
  left: 0; // 부모 요소의 왼쪽에 맞추기
  width: 250px; // 사이드바 너비
  height: 100%; // 부모 요소의 높이에 맞추기
  background-color: white; // 배경 색상
  z-index: 1000; // 다른 요소 위에 표시
  border-radius: 40px 0 0 40px;
  color: black;
  padding: 0 16px;
  transition: transform 0.5s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

export const Title = styled.div`
  margin-top: 60px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export const Photo = styled.img`
  display: flex;
  width: 102px;
  height: 102px;
`;

export const Name = styled.div`
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const List = styled.div`
  display: flex;
  font-size: 16px;
  font-style: normal;
  text-decoration: none; // 밑줄 제거
  padding: 6px 12px; 
  color: black; 
  cursor: pointer; // 커서 포인터로 변경
  &:hover { 
    color: #1675FF;
  }
`;