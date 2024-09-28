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
        onMouseDown={(e) => {
          e.preventDefault(); // 기본 동작 방지, 이벤트 버블링 때문에 전송 버튼을 클릭하면 바로 focus가 꺼져서 사라짐
          handleSendMessage(); // 전송 메시지 호출
        }}
      />
    </InputBarContainer>
  );
};

export default InputBar;



