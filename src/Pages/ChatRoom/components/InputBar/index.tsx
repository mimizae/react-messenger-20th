import React, { useState, useRef } from 'react';
import camera from '../../../../assets/Camera.svg';
import gallery from '../../../../assets/Gallery.svg';
import Good from '../../../../assets/Good.svg';
import sendIcon from '../../../../assets/SendIcon.svg'; // 전송 버튼 아이콘
import { InputBarContainer, Camera, Gallery, InputField, GoodButton, SendButton} from './style';

interface InputBarProps {
  onSendMessage: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
  const messageRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false); // 입력창 포커스 상태 관리

  const handleSendMessage = () => {
    if (messageRef.current) {
      const message = messageRef.current.value.trim();
      if (message) {
        console.log('Sending message:', message); // 전송 확인을 위한 콘솔 로그
        onSendMessage(message); // 부모 컴포넌트에 메시지를 전달
        messageRef.current.value = ''; // 입력창 초기화
      }
    }
  };

  return (
    <InputBarContainer>
      <Camera src={camera} alt="Camera" />
      <Gallery src={gallery} alt="Gallery" $isFocused={isFocused} />
      <InputField
        type="text"
        ref={messageRef} // useRef를 통해 입력 필드 참조
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



