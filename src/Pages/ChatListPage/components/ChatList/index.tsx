import React, { useEffect, useState } from "react";
import { ChatListLayout, ChatItem, LastMessage, Timestamp, ChatName } from "./style";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
}

interface Message {
  userId: number;
  content: string;
  time: string;
}

interface ChatRoom {
  users: User[];
  messages: Message[];
}

interface ChatData {
  [key: string]: ChatRoom;
}

const ChatList: React.FC = () => {
  const [chatData, setChatData] = useState<ChatData>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const storedChatData = localStorage.getItem("chatMessages");
        if (storedChatData) {
          const data = JSON.parse(storedChatData);
          setChatData(data);
        }
      } catch (error) {
        console.error("Error loading chat data from localStorage:", error);
      }
    };

    fetchChatData();
  }, []);

  const handleChatClick = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <ChatListLayout>
      {Object.entries(chatData).map(([chatId, chatRoom]) => {
        const lastMessage = chatRoom.messages[chatRoom.messages.length - 1];
        const participants = chatRoom.users.map(user => user.name).join(", ");

        return (
          <ChatItem key={chatId} onClick={() => handleChatClick(chatId)}>
            <ChatName>{participants}</ChatName>
            <LastMessage>{lastMessage.content}</LastMessage>
            <Timestamp>{new Date(lastMessage.time).toLocaleTimeString()}</Timestamp>
          </ChatItem>
        );
      })}
    </ChatListLayout>
  );
};

export default ChatList;

