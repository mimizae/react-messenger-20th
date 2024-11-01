import styled from "styled-components";

interface NavItemProps {
  $active: boolean;
}

export const BottomNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 76px;
  align-items: center;
  justify-content: center;
  padding: 12px 0 40px 0 ;
  position: absolute; /* 부모 요소를 기준으로 하단에 고정 */
  bottom: 0; /* 부모 요소의 가장 아래에 위치 */
  left: 0;
  background-color: #F7F8F9; /* 배경 색상 */
  border-radius: 0 0 40px 40px; 
`;

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer; /* 커서 모양 */
  text-decoration: none;
  color: ${(props) => (props.$active ? "#1675FF" : "#72787F")}; /* $active 상태에 따른 색상 */
`;

export const Menu = styled.span`
  color: ${(props) => props.color || "#72787F"};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  &:hover {
    color: #1675FF; /* 마우스 오버 시 색상 변경 */
  }
`;

export const Icon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
`;

export const HomeIndicator = styled.div`
  width: 139px;
  height: 5px;
  border-radius: 100px;
  background: var(--gray-scale-800, #26282B);
  position: absolute; /* 부모 요소를 기준으로 하단에 고정 */
  bottom: 10px; /* 부모 요소의 가장 아래에 위치 */
`;