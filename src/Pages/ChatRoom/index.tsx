import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDataState, chatDataState, currentUserIdState, opponentUserIdState } from '../../recoil/atom';
import TopNavBar from './components/TopNavBar';
import Chats from './components/Chats';
import InputBar from './components/InputBar';
import { ChatRoomContainer, ProfileImgSmall } from './styles';
import StatusBar from '../../components/StatusBar';
import { MessageProps } from './components/Chats';

const ChatRoom: React.FC = () => {
  const { id: chatId } = useParams<{ id: string }>();
  const userData = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기
  const [chatData, setChatData] = useRecoilState(chatDataState); // atom에서 채팅 데이터 가져오기 및 업데이트하기
  const [messages, setMessages] = useState< MessageProps[]>([]);
  const [currentUserId, setCurrentUserId] = useRecoilState(currentUserIdState);
  const [opponentUserId, setOpponentUserId] = useRecoilState(opponentUserIdState);
  const [opponentProfileImage, setOpponentProfileImage] = useState<string | null>(null);
  const chatRef = React.useRef<HTMLDivElement>(null);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const initializeChat = () => {
      const chatDataForId = chatData[chatId!]; // chatId에 해당하는 대화 데이터 가져오기

      if (chatDataForId) {
        // 현재 사용자 ID와 상대방 사용자 ID 설정
        setCurrentUserId(chatDataForId.users[0].id); // 첫 번째 사용자를 현재 사용자로 설정
        setOpponentUserId(chatDataForId.users[1].id); // 두 번째 사용자를 상대방으로 설정
        setMessages(chatDataForId.messages as MessageProps[]); // 대화 메시지 설정
      }

      // 로컬 스토리지에서 메시지 로드
      const storedMessages = localStorage.getItem(`chatMessages-${chatId}`);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages) as MessageProps[]);
      }
    };

    if (chatId) {
      initializeChat();
    }
  }, [chatId, chatData, userData, setCurrentUserId, setOpponentUserId]); // 의존성 배열에 chatData와 userData 추가

  useEffect(() => {
    const opponentUser = userData.find((user) => user.id === opponentUserId);
    setOpponentProfileImage(opponentUser ? opponentUser.profileImage : null);
  }, [opponentUserId, userData]);

  useEffect(() => {
    // 새 메시지가 추가되면 스크롤을 맨 아래로 이동
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const newMessage:MessageProps = { userId: currentUserId, content: message, time: new Date().toISOString() };
    const updatedMessages:MessageProps[] = [...messages, newMessage];
    setMessages(updatedMessages);

    // 로컬 스토리지에 저장
    localStorage.setItem(`chatMessages-${chatId}`, JSON.stringify(updatedMessages));

    // Recoil 상태 업데이트
    setChatData((prevChatData) => ({
      ...prevChatData,
      [chatId!]: {
        ...prevChatData[chatId!],
        messages: updatedMessages,
      },
    }));

    // 상대방의 자동 답장 로직
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      const receivedMessage1: MessageProps = { userId: opponentUserId, content: "세오스 20기", time: new Date().toISOString() };
      const updatedMessagesWithFirstResponse: MessageProps[] = [...updatedMessages, receivedMessage1];
      setMessages(updatedMessagesWithFirstResponse);

      // 로컬 스토리지와 Recoil 상태에 저장
      localStorage.setItem(`chatMessages-${chatId}`, JSON.stringify(updatedMessagesWithFirstResponse));
      setChatData((prevChatData) => ({
        ...prevChatData,
        [chatId!]: {
          ...prevChatData[chatId!],
          messages: updatedMessagesWithFirstResponse,
        },
      }));

      setTimeout(() => {
        const receivedMessage2:MessageProps = { userId: opponentUserId, content: "FE 파이팅 🩷🩷", time: new Date().toISOString() };
        const updatedMessagesWithSecondResponse: MessageProps[] = [...updatedMessagesWithFirstResponse, receivedMessage2];
        setMessages(updatedMessagesWithSecondResponse);

        // 로컬 스토리지와 Recoil 상태에 최종 메시지 저장
        localStorage.setItem(`chatMessages-${chatId}`, JSON.stringify(updatedMessagesWithSecondResponse));
        setChatData((prevChatData) => ({
          ...prevChatData,
          [chatId!]: {
            ...prevChatData[chatId!],
            messages: updatedMessagesWithSecondResponse,
          },
        }));
      }, 2000);
    }, 2000);

    setTypingTimeout(timeoutId);
  };

  return (
    <ChatRoomContainer>
      <StatusBar/>
      <TopNavBar opponentUserId={opponentUserId} currentUserId={currentUserId} />
      <Chats 
        currentUserId={currentUserId}
        opponentUserId={opponentUserId}
        ref={chatRef}
        messages={messages} 
        getProfileImage={(index: number) => {
          // 메시지 배열의 길이를 체크하여 유효한 인덱스인지 확인
          if (index < 0 || index >= messages.length) {
            return null; // 유효하지 않은 인덱스일 경우 null 반환
          }
          const isLastMessage = messages[index].userId === opponentUserId && 
            (index === messages.length - 1 || messages[index + 1]?.userId === currentUserId);

          return isLastMessage ? (
            <ProfileImgSmall src={opponentProfileImage || ''} alt="상대방 프로필" />
          ) : null;
        }} 
      />
      <InputBar onSendMessage={handleSendMessage} />
    </ChatRoomContainer>
  );
};

export default ChatRoom;










