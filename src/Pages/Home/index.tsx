import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Home!</h1>
      <p>채팅방의 경로는 /chat/:id 입니다! 🤩</p>
    </HomeContainer>
  );
};

export default Home;