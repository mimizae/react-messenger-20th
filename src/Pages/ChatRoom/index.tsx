import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import InputBar from './components/InputBar';
import { ChatRoomContainer, Chat, MyMessage, OtherMessage } from './styles';

// 로컬 스토리지에서 메시지 로드
const loadMessagesFromLocalStorage = (chatId: string) => {
  const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
  return savedMessages ? JSON.parse(savedMessages) : [];
};

// 로컬 스토리지에 메시지 저장
const saveMessagesToLocalStorage = (chatId: string, messages: string[]) => {
  localStorage.setItem(`chatMessages_${chatId}`, JSON.stringify(messages));
};

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<string[]>([]);
  const chatRef = React.useRef<HTMLDivElement>(null); // chat 영역을 참조할 ref
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null); // 입력 중 타이머

  useEffect(() => {
    const storedMessages = loadMessagesFromLocalStorage(id!);
    setMessages(storedMessages);
  }, [id]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight; // 새 메시지 추가 시 스크롤 최하단으로 이동
    }
  }, [messages]); // messages가 변경될 때마다 실행

  const handleSendMessage = (message: string) => {
    const updatedMessages = [...messages, `나: ${message}`];
    setMessages(updatedMessages);
    saveMessagesToLocalStorage(id!, updatedMessages); // 로컬 스토리지에 저장

    // 입력이 끝났음을 알리는 타이머를 설정
    if (typingTimeout) {
      clearTimeout(typingTimeout); // 이전 타이머를 취소
    }

    // 입력 종료 감지 후 답변을 위한 타이머 설정
    const timeoutId = setTimeout(() => {
      const lastMessage = updatedMessages[updatedMessages.length - 1];
      const receivedMessage = `상대방: ${lastMessage.replace('나: ', '')}에 대한 답변입니다.`;
      
      // 새로운 메시지를 추가하지 않고, 마지막 메시지에 대한 답변만 추가
      const updatedMessagesWithResponse = [...updatedMessages, receivedMessage];
      setMessages(updatedMessagesWithResponse);
      saveMessagesToLocalStorage(id!, updatedMessagesWithResponse); // 로컬 스토리지에 저장
    }, 3000); // 3초 후에 답변

    setTypingTimeout(timeoutId); // 현재 타이머를 저장
  };

  return (
    <ChatRoomContainer>
      <TopNavBar id={id} />
      <Chat ref={chatRef}> {/* ref를 Chat에 추가 */}
      {messages.map((msg, index) => {
      const isMyMessage = msg.startsWith('나:');
      // 첫 번째 메시지인지 확인
      const isFirstMessage = index === 0 || messages[index - 1]?.startsWith('상대방:');

      return isMyMessage ? (
        <MyMessage key={index} isFirstMessage={isFirstMessage}>
          {msg.replace('나: ', '')}
        </MyMessage>
      ) : (
        <OtherMessage key={index} isFirstMessage={isFirstMessage}>
          {msg.replace('상대방: ', '')}
        </OtherMessage>
      );
    })}
      </Chat>
      <InputBar onSendMessage={handleSendMessage} />
    </ChatRoomContainer>
  );
};

export default ChatRoom;








