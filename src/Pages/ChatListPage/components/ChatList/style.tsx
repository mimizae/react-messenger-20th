import styled from "styled-components";

export const ChatListLayout = styled.div`
display: flex;
flex-direction: column;
`;

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: #e9eff2; 
  }
`;

export const UserPhoto = styled.img`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
`;

export const ChatInfo = styled.div`
  display: flex
  flex-direction: column;
`;

export const MesseageInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const ChatName = styled.p`
  font-weight: bold;
  margin: 0;
  color: #333; 
  font-size: 16px; 
  flex: 1; /* 남은 공간을 차지하도록 설정 */
`;

export const LastMessage = styled.p`
  flex: 1;
  margin: 0;
  color: #606770;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis; /* 긴 메시지에 ellipsis 처리 */
  white-space: nowrap;
`;

export const Timestamp = styled.span`
  font-size: 14px;
  color: #b0b3b8; 
`;
