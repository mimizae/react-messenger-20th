import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: flex;
  padding: 0 16px;
  height: 100%;
  flex-direction: column;
  position: relative;
  overflow: auto; // 내부 요소가 넘칠 경우 스크롤 가능
`;
export const ProfileImgSmall = styled.img`
  width: 24px;
  height: 24px;
  margin: 5px 8px 0 0;  
`;
  