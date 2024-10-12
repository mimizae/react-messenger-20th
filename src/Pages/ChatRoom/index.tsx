import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Chats from './components/Chats';
import InputBar from './components/InputBar';
import Profile1 from '../../assets/profile.svg';
import Profile2 from '../../assets/cat.svg';
import { ChatRoomContainer, ProfileImgSmall } from './styles';

const loadMessagesFromMockData = async (chatId: string) => {
  const response = await fetch('/mockData.json');
  const data = await response.json();
  return data.chatMessages[chatId]?.messages || []; // 메시지 배열을 반환
};

const loadMessagesFromLocalStorage = (chatId: string) => {
  const messages = localStorage.getItem(`chatMessages-${chatId}`);
  if (messages) {
    const parsedMessages = JSON.parse(messages);
    if (Array.isArray(parsedMessages) && parsedMessages.every(msg => typeof msg === 'object')) {
      return parsedMessages; // 객체 배열로 반환
    }
  }
  return [];
};

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentUserId = Number(id); // id를 숫자로 변환
  const opponentUserId = currentUserId === 1 ? 2 : 1; // 상대방 사용자 ID 설정
  const [messages, setMessages] = useState<{ userId: number; content: string; time: string }[]>([]); // time을 string으로 수정
  const chatRef = React.useRef<HTMLDivElement>(null);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const storedMessages = loadMessagesFromLocalStorage(id!);
      if (storedMessages.length === 0) {
        const mockMessages = await loadMessagesFromMockData(id!);
        setMessages(mockMessages);
      } else {
        setMessages(storedMessages);
      }
    };

    fetchMessages();
  }, [id]);

  useEffect(() => {
    // scroll을 맨 아래로 이동
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]); // messages가 변경될 때마다 실행

  const handleSendMessage = (message: string) => {
    const newMessage = { userId: currentUserId, content: message, time: new Date().toISOString() }; // 현재 시간을 ISO 문자열로 저장
    const updatedMessages = [...messages, newMessage]; // 나의 메시지 추가
    setMessages(updatedMessages);
    localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessages));
    localStorage.setItem(`chatMessages-${opponentUserId}`, JSON.stringify(updatedMessages));

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId1 = setTimeout(() => {
      const receivedMessage1 = { userId: opponentUserId, content: "청경채의 익힘 정도를", time: new Date().toISOString() }; // 상대방 메시지
      const updatedMessagesWithFirstResponse = [...updatedMessages, receivedMessage1];
      setMessages(updatedMessagesWithFirstResponse);
      localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessagesWithFirstResponse));
      localStorage.setItem(`chatMessages-${opponentUserId}`, JSON.stringify(updatedMessagesWithFirstResponse));

      // 두 번째 답장
      setTimeout(() => {
        const receivedMessage2 = { userId: opponentUserId, content: "억.억이게뭐예유", time: new Date().toISOString() };
        const updatedMessagesWithSecondResponse = [...updatedMessagesWithFirstResponse, receivedMessage2];
        setMessages(updatedMessagesWithSecondResponse);
        localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessagesWithSecondResponse));
        localStorage.setItem(`chatMessages-${opponentUserId}`, JSON.stringify(updatedMessagesWithSecondResponse));

        // 세 번째 답장
        setTimeout(() => {
          const receivedMessage3 = { userId: opponentUserId, content: "요리하는돌아이귀여워", time: new Date().toISOString() };
          const updatedMessagesWithThirdResponse = [...updatedMessagesWithSecondResponse, receivedMessage3];
          setMessages(updatedMessagesWithThirdResponse);
          localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessagesWithThirdResponse));
          localStorage.setItem(`chatMessages-${opponentUserId}`, JSON.stringify(updatedMessagesWithThirdResponse));
        }, 2000); // 세 번째 답장

      }, 2000); // 두 번째 답장

    }, 2000); // 첫 번째 답장    

    setTypingTimeout(timeoutId1);
  };

  return (
    <ChatRoomContainer>
      <TopNavBar id={id} />
      <Chats 
        currentUserId={currentUserId}
        ref={chatRef}
        messages={messages} 
        getProfileImage={(index: number) => {
          const isLastMessage = messages[index].userId === opponentUserId && // 상대방의 메시지일 때
            (index === messages.length - 1 || messages[index + 1]?.userId === currentUserId);

          return isLastMessage ? (
            <ProfileImgSmall src={id === "1" ? Profile1 : Profile2} alt="상대방 프로필" />
          ) : null;
        }} 
      />
      <InputBar onSendMessage={handleSendMessage} />
    </ChatRoomContainer>
  );
};

export default ChatRoom;






