import styled from 'styled-components';

export const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;

export const Chat = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MyMessage = styled.div<{ isFirstMessage: boolean }>`
  align-self: flex-end;
  background: var(--main-blue-02, #6052FF);
  color: white;
  padding: 6px 12px;
  border-radius: ${({ isFirstMessage }) => isFirstMessage ? '16px 16px 4px 16px' : '16px 4px 16px 16px'};
  max-width: 60%;
  word-wrap: break-word;
`;

export const OtherMessage = styled.div<{ isFirstMessage: boolean }>`
  align-self: flex-start;
  background: var(--gray-scale-100, #E8EBED);
  color: #333;
  padding: 6px 12px;
  border-radius: ${({ isFirstMessage }) => isFirstMessage ? '16px 16px 16px 4px' : '4px 16px 16px 16px'};
  max-width: 60%;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;