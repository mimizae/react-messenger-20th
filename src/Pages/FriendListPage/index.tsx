import React, { useEffect, useState } from 'react';
import FriendList from './FriendList';
import { useRecoilState } from 'recoil';
import { chatDataState, userDataState } from '../../recoil/atom';
import { PageContainer } from './style';
import BottomNav from '../../components/BottomNav';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';

//사실상 Home 페이지!
const FriendListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [, setUserData] = useRecoilState(userDataState);
  const [, setChatData] = useRecoilState(chatDataState);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await fetch('/mockUserData.json');
        const userData = await response.json();
        setUserData(userData); // userData를 atom에 저장
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const loadChatData = async () => {
      try {
        const response = await fetch('/mockChatData.json');
        const chatData = await response.json();

        // 로컬스토리지에서 업데이트된 메시지 병합
        Object.keys(chatData.chatMessages).forEach((chatId) => {
          const storedMessages = localStorage.getItem(`chatMessages-${chatId}`);
          if (storedMessages) {
            chatData.chatMessages[chatId].messages = JSON.parse(storedMessages);
          }
        });

        setChatData(chatData.chatMessages); // chatData를 atom에 저장
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    loadUserData();
    loadChatData();
  }, [setUserData, setChatData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageContainer>
      <StatusBar/>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} title='친구' />
      <FriendList searchTerm={searchTerm} />
      <BottomNav />
    </PageContainer>
  );
};

export default FriendListPage;

