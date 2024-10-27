import React, { useState } from 'react';
import FriendList from './component/FriendList';
import { FriendListPageContainer, Header, Title, ProfileImg, FriendSearch } from './style';
import profileImg from '../../assets/cat.svg';
import BottomNav from './component/BottomNav';

const FriendListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <FriendListPageContainer>
      <Header>
        <ProfileImg src={profileImg} />
        <Title>친구</Title>
      </Header>
      <FriendSearch
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FriendList searchTerm={searchTerm} />
      <BottomNav/>
    </FriendListPageContainer>
  );
};

export default FriendListPage;
