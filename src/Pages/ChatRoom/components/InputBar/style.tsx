import styled from 'styled-components';

export const InputBarContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
  align-items: center;
  position: absolute; // 부모 요소에 상대적으로 위치 고정
  bottom: 90px; // 부모 요소의 하단에 고정
  left: 0; // 왼쪽도 고정
  right: 0; // 오른쪽도 고정
  padding: 16px;
`;

export const Camera = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Gallery = styled.img<{ $isFocused: boolean }>`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: ${({ $isFocused }) => ($isFocused ? 'none' : 'block')}; /* 포커스 시 사라짐 */
`;

export const InputField = styled.input<{ $isFocused: boolean }>`
  display: flex;
  flex: 1;
  padding: 12px;
  outline: none;
  border-radius: 15px;
  border: none;
  background: var(--gray-scale-100, #E8EBED);
  transition: all 0.3s ease;
`;

export const GoodButton = styled.img<{ $isFocused: boolean }>`
  display: flex;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: ${({ $isFocused }) => ($isFocused ? 'none' : 'block')}; /* 포커스 시 사라짐 */
`;

export const SendButton = styled.img<{ $isFocused: boolean }>`
  display: flex;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: ${({ $isFocused }) => ($isFocused ? 'block' : 'none')}; /* 포커스 시 나타남 */
`;