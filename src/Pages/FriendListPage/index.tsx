import React, { useState } from 'react';
import FriendList from './component/FriendList';
import { PageContainer } from './style';
import BottomNav from '../../components/BottomNav';
import Header from '../../components/Header';

const FriendListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageContainer>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} title='친구' />
      <FriendList searchTerm={searchTerm} />
      <BottomNav />
    </PageContainer>
  );
};

export default FriendListPage;
