import styled from "styled-components";

export const Chat = styled.div`
  display: flex;
  gap: 5px;
  height: 690px;
  overflow-y: auto; // 스크롤 가능하게 설정
  flex-direction: column;
  // 스크롤바를 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyMessage = styled.div<{ $isFirstMessage: boolean }>`
  align-self: flex-end;
  background: var(--main-blue-02, #6052FF);
  color: white;
  padding: 6px 12px;
  border-radius: ${({ $isFirstMessage }) => $isFirstMessage ? '16px 16px 4px 16px' : '16px 4px 16px 16px'};
  max-width: 60%;
  word-wrap: break-word;
`;
export const OtherMessageContainer = styled.div<{ $hasProfileImg: boolean }>`
  display: flex;
  align-items: flex-start; // 메시지와 프로필 이미지를 수직으로 정렬
  margin-left: ${({ $hasProfileImg }) => $hasProfileImg ? '0' : '32px'}; // 프로필 이미지가 없으면 왼쪽 여백 추가
`;

export const OtherMessage = styled.div<{ $isFirstMessage: boolean }>`
  display: flex; // flex 레이아웃으로 설정
  align-items: center; // 이미지와 텍스트 수직 중앙 정렬
  background: var(--gray-scale-100, #E8EBED);
  color: #333;
  padding: 6px 12px;
  border-radius: ${({ $isFirstMessage }) => $isFirstMessage ? '4px 16px 16px 16px' : '16px 16px 16px 4px'};
  max-width: 60%;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;