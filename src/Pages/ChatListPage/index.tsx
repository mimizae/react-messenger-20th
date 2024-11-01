import React,{ useState } from "react";
import Header from "../../components/Header";
import { ListPageContainer } from "../FriendListPage/style";
import BottomNav from "../../components/BottomNav";
import ActiveStatus from "./components/ActiveStatus";

const ChatListPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    return (
        <ListPageContainer>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} title='채팅' />
            <ActiveStatus/>
            <BottomNav/>
        </ListPageContainer>
    )
};

export default ChatListPage;