import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;
export const ProfileImgSmall = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;  // 프로필 이미지와 메시지 간격
  border-radius: 50%; // 동그란 이미지
  transition: transform 0.3s ease; // 부드러운 이동을 위한 transition
`;
