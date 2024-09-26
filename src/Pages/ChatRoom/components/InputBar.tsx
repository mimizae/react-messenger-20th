import React, { useState } from 'react';
import styled from 'styled-components';
import camera from '../../../assets/Camera.svg';
import gallery from '../../../assets/Gallery.svg';
import Good from '../../../assets/Good.svg';
import sendIcon from '../../../assets/SendIcon.svg'; // 전송 버튼 아이콘

const InputBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;  /* 고정 위치 설정 */
  bottom: 100px;     /* 하단 여백 20px */
`;

const Camera = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Gallery = styled.img<{ $isFocused: boolean }>`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: ${({ $isFocused }) => ($isFocused ? 'none' : 'block')}; /* 포커스 시 사라짐 */
`;

const InputField = styled.input<{ $isFocused: boolean }>`
  flex: 1;
  width: 100%;
  padding: 12px;
  outline: none;
  border-radius: 15px;
  border: none;
  background: var(--gray-scale-100, #E8EBED);
  transition: all 0.3s ease;
`;

const GoodButton = styled.img<{ $isFocused: boolean }>`
  padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: ${({ $isFocused }) => ($isFocused ? 'none' : 'block')}; /* 포커스 시 사라짐 */
`;

const SendButton = styled.img<{ $isFocused: boolean }>`
  padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: ${({ $isFocused }) => ($isFocused ? 'block' : 'none')}; /* 포커스 시 나타남 */
`;

interface InputBarProps {
  onSendMessage: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false); // 입력창 포커스 상태 관리

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message); // 전송 확인을 위한 콘솔 로그
      onSendMessage(message); // 부모 컴포넌트에 메시지를 전달
      setMessage(''); // 입력창 초기화
    }
  };

  return (
    <InputBarContainer>
      <Camera src={camera} alt="Camera" />
      <Gallery src={gallery} alt="Gallery" $isFocused={isFocused} />
      <InputField
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Aa"
        onFocus={() => setIsFocused(true)}  // 입력창 포커스 시 상태 변경
        onBlur={() => setIsFocused(false)}   // 포커스 해제 시 상태 변경
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage(); // 엔터 키를 눌렀을 때 메시지 전송
          }
        }}
        $isFocused={isFocused}
      />
      <GoodButton src={Good} alt="goodButton" $isFocused={isFocused} />
      <SendButton
        src={sendIcon}
        alt="sendButton"
        $isFocused={isFocused}
        onClick={handleSendMessage}  // 전송 버튼 클릭 시 메시지 전송
      />
    </InputBarContainer>
  );
};

export default InputBar;


