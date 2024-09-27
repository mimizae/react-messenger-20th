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
  return data.chatMessages[chatId] || [];
};

const loadMessagesFromLocalStorage = (chatId: string) => {
  const messages = localStorage.getItem(`chatMessages-${chatId}`);
  return messages ? JSON.parse(messages) : [];
};

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<string[]>([]);
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
    if (chatRef.current) {
      // 스크롤을 아래로 이동
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const updatedMessages = [...messages, `나: ${message}`];
    setMessages(updatedMessages);
    localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessages));
  
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  
    const responseName = id === "1" ? "세오스" : id === "2" ? "진나경" : "상대방";
    
    const timeoutId1 = setTimeout(() => {
      const receivedMessage1 = `${responseName}: ${message}에 대한 답 1`;
      const updatedMessagesWithFirstResponse = [...updatedMessages, receivedMessage1];
      setMessages(updatedMessagesWithFirstResponse);
      localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessagesWithFirstResponse));
  
      setTimeout(() => {
        const receivedMessage2 = `${responseName}: ${message}에 대한 답 2`;
        const updatedMessagesWithSecondResponse = [...updatedMessagesWithFirstResponse, receivedMessage2];
        setMessages(updatedMessagesWithSecondResponse);
        localStorage.setItem(`chatMessages-${id}`, JSON.stringify(updatedMessagesWithSecondResponse));
      }, 3000);
    }, 2000);
  
    setTypingTimeout(timeoutId1);
  };  

  return (
    <ChatRoomContainer>
      <TopNavBar id={id} />
        <Chats 
          ref={chatRef}
          id={id}
          messages={messages} 
          getProfileImage={(index: number) => {
            // 현재 메시지가 상대방 메시지인지 확인
            const isLastMessage = messages[index].startsWith('상대방:') && 
              (index === messages.length - 1 || messages[index + 1]?.startsWith('나:'));

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



