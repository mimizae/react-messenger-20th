import React from "react";
import { HeaderContainer, ProfileImg, Title, FriendSearch } from "./style";
import profileImg from '../../assets/ChatRoom/cat.svg';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, title }) => {
  return (
    <>
      <HeaderContainer>
        <ProfileImg src={profileImg} />
        <Title>{title}</Title>
      </HeaderContainer>
      <FriendSearch
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </>
  );
};

export default Header;