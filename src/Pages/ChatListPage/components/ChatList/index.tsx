import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDataState, chatDataState  } from '../../../../recoil/atom';
import { ChatListLayout, ChatItem, LastMessage, Timestamp, ChatName, UserPhoto, ChatInfo, MesseageInfo } from './style';
import { NoResult } from '../../../FriendListPage/FriendList/style';
import { SearchListProps } from '../../../FriendListPage/FriendList';

// 타임스탬프 포맷팅 함수
const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatList: React.FC<SearchListProps> = ({ searchTerm }) => {
  const users = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기
  const chatRooms = useRecoilValue(chatDataState); // atom에서 채팅 데이터 가져오기
  const navigate = useNavigate();

  // 검색어에 따라 채팅 목록 필터링
  const filteredChatRooms = Object.keys(chatRooms).filter((chatId) => {
    const chat = chatRooms[chatId];
    return chat.users.some((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  // 각 채팅방의 마지막 메시지를 기준으로 정렬
  const sortedChatRooms = filteredChatRooms.sort((a, b) => {
    const lastMessageA = chatRooms[a].messages[chatRooms[a].messages.length - 1];
    const lastMessageB = chatRooms[b].messages[chatRooms[b].messages.length - 1];

    // 메시지가 없을 경우 처리
    const timeA = lastMessageA ? new Date(lastMessageA.time).getTime() : 0;
    const timeB = lastMessageB ? new Date(lastMessageB.time).getTime() : 0;

    return timeB - timeA; // 내림차순으로 정렬
  });

  return (
    <ChatListLayout>
      {filteredChatRooms.length > 0 ? (
        sortedChatRooms.map((chatId) => {
          const chat = chatRooms[chatId];

          // 마지막 메시지 가져오기
          const lastMessage = chat.messages[chat.messages.length - 1]; // 마지막 메시지
          const opponentId = chat.users.find((user) => user.id !== chat.users[0].id)?.id; // 상대방 ID
          const opponentData = users.find((user) => user.id === opponentId); // 상대방 정보 찾기

          return (
            <ChatItem key={chatId} onClick={() => navigate(`/chat/${opponentId}`)}>
              <UserPhoto src={opponentData?.profileImage} alt={opponentData?.name || 'User'} />
              <ChatInfo>
                <ChatName>{opponentData?.name}</ChatName>
                <MesseageInfo>
                  <LastMessage>{lastMessage.content}</LastMessage>
                  <Timestamp>· {formatTimestamp(lastMessage.time)}</Timestamp>
                </MesseageInfo>
              </ChatInfo>
            </ChatItem>
          );
        })
      ) : (
        <NoResult>검색 결과가 없습니다. 🥹</NoResult>
      )}
    </ChatListLayout>
  );  
};

export default ChatList;
