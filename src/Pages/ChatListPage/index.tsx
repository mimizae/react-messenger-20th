import React,{ useState } from "react";
import Header from "../../components/Header";
import { PageContainer } from "../FriendListPage/style";
import BottomNav from "../../components/BottomNav";
import ActiveStatus from "./components/ActiveStatus";
import ChatList from "./components/ChatList";
import StatusBar from "../../components/StatusBar";

const ChatListPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    return (
        <PageContainer>
            <StatusBar/>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} title='채팅' />
            <ActiveStatus/>
            <ChatList searchTerm={searchTerm}/>
            <BottomNav/>
        </PageContainer>
    )
};

export default ChatListPage;