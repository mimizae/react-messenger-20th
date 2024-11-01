import styled from "styled-components";

export const ChatListLayout = styled.div`
display: flex;
`;

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #ffffff; /* 채팅 아이템 배경색 */
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9eff2; /* 호버 시 배경색 변경 */
  }
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc; /* 기본 프로필 사진 색상 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
  color: white;
`;

export const ChatName = styled.p`
  font-weight: bold;
  margin: 0;
  color: #333; /* 사용자 이름 색상 */
  font-size: 16px; /* 사용자 이름 크기 */
  flex: 1; /* 남은 공간을 차지하도록 설정 */
`;

export const LastMessage = styled.p`
  flex: 1;
  margin: 0;
  color: #606770; /* 메시지 텍스트 색상 */
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis; /* 긴 메시지에 ellipsis 처리 */
  white-space: nowrap;
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #b0b3b8; /* 타임스탬프 색상 */
  margin-left: 10px;
`;