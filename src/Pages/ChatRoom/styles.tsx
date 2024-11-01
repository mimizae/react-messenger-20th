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
  margin-right: 8px;  // 프로필 이미지와 메시지 간격
  border-radius: 50%; // 동그란 이미지
  transition: transform 0.3s ease; // 부드러운 이동을 위한 transition
`;
  