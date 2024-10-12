import styled from 'styled-components';

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height: 690px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyMessage = styled.div<{ $isFirstMessage: boolean, $isGroupEnd: boolean, $isMiddleMessage: boolean }>`
  align-self: flex-end;
  background: var(--main-blue-02, #6052FF);
  color: white;
  padding: 6px 12px;
  max-width: 280px;
  word-wrap: break-word;

  /* 메시지 위치에 따라 다른 border-radius 적용 */
  border-radius: ${({ $isFirstMessage, $isGroupEnd, $isMiddleMessage }) => {
    if ($isFirstMessage) return '16px 16px 4px 16px'; // 첫 번째 메시지
    if ($isGroupEnd) return '16px 4px 16px 16px';    // 마지막 메시지
    if ($isMiddleMessage) return '16px 4px 4px 16px'; // 중간 메시지
    return '16px'; // 기본 값
  }};
  
  margin-bottom: ${({ $isGroupEnd }) => $isGroupEnd ? '12px' : '2px'};  // 그룹 마지막이면 12px, 아니면 2px
`;

export const OtherMessageContainer = styled.div<{ $hasProfileImg: boolean, $isGroupEnd: boolean }>`
  display: flex;
  align-items: flex-start;
  margin-left: ${({ $hasProfileImg }) => $hasProfileImg ? '0' : '32px'};
  margin-bottom: ${({ $isGroupEnd }) => $isGroupEnd ? '12px' : '2px'};
  border-radius: ${({$isGroupEnd}) => $isGroupEnd ? '4px 16px 16px 16px' : '4px 16px 16px 4px'};
`;

export const OtherMessage = styled.div<{ $isFirstMessage: boolean, $isMiddleMessage: boolean, $isGroupEnd: boolean }>`
  background: var(--gray-scale-100, #E8EBED);
  color: #333;
  padding: 6px 12px;
  max-width: 280px;
  word-wrap: break-word;
  
  /* border-radius 계산 순서 조정 */
  border-radius: ${({ $isFirstMessage, $isMiddleMessage, $isGroupEnd }) => {
    if ($isFirstMessage) return '16px 16px 16px 4px'; // 첫 번째 메시지
    if ($isMiddleMessage) return '4px 16px 16px 4px';  // 중간 메시지
    if ($isGroupEnd) return '4px 16px 16px 16px';    // 마지막 메시지
    return '16px';  // 기본 값
  }};
`;
export const MessageTime = styled.div`
  align-self: center;
  font-size: 0.8rem;
  color: gray;
  text-align: center;
  margin: 32px 0 20px 0; /* 메시지 간 간격 */
`;
export const EmojiPicker = styled.div`
  display: flex;
  width: 240px;
  height: 36px;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  background-color: var(--gray-scale-50, #F7F8F9); /* 배경색 */
  border-radius: 16px; /* 모서리 둥글게 */
  padding: 6px 12px; /* 안쪽 여백 */
  
  span {
    width: 24px;
    height: 24px;
    cursor: pointer; /* 마우스 포인터 모양 변경 */
    margin: 0 5px; /* 이모지 사이의 간격 */
    font-size: 20px; /* 이모지 크기 */
    
    &:hover {
      transform: scale(1.2); /* 호버 시 이모지 확대 */
      transition: transform 0.2s; /* 확대 애니메이션 */
    }
  }
`;

