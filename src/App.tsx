import React from 'react';
import GlobalStyle from './GlobalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FriendListPage from './Pages/FriendListPage';
import ChatRoom from './Pages/ChatRoom';

const App: React.FC = () => {
  return (
    <>
     <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<FriendListPage/>}/>
        {/*<Route path="/chat" element={<ChatListPage />} />*/}
        <Route path="/chat/:id" element={<ChatRoom />} /> 
      </Routes>
    </Router>
    </>
  );
};

export default App;