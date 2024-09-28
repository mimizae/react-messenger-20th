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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  /* border-radius 계산 순서 조정 */
  border-radius: ${({ $isFirstMessage, $isMiddleMessage, $isGroupEnd }) => {
    if ($isFirstMessage) return '16px 16px 16px 4px'; // 첫 번째 메시지
    if ($isMiddleMessage) return '4px 16px 16px 4px';  // 중간 메시지
    if ($isGroupEnd) return '4px 16px 16px 16px';    // 마지막 메시지
    return '16px';  // 기본 값
  }};
`;

