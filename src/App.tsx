import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FriendListPage from './Pages/FriendListPage';
import ChatListPage from './Pages/ChatListPage';
import ChatRoom from './Pages/ChatRoom';
import StoryPage from './Pages/StoryPage';

const App: React.FC = () => {
  return (
    <RecoilRoot>
     <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<FriendListPage/>}/>
        <Route path="/chat" element={<ChatListPage />}/>
        <Route path="/chat/:id" element={<ChatRoom />} /> 
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
    </RecoilRoot>
  );
};

export default App;