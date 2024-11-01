import React, { useState } from "react";
import { HeaderContainer, ProfileImg, Title, FriendSearch } from "./style";
import profileImg from '../../assets/ChatRoom/cat.svg';
import Sidebar from "../Sidebar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <ProfileImg onClick={toggleSidebar}src={profileImg} />
        <Title>{title}</Title>
      </HeaderContainer>
      <FriendSearch
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />} {/* 사이드바 조건부 렌더링 */}
    </>
  );
};

export default Header;