import React from 'react';
import GlobalStyle from './GlobalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ChatRoom from './Pages/ChatRoom';

const App: React.FC = () => {
  return (
    <>
     <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/chat/:id" element={<ChatRoom />} /> 
      </Routes>
    </Router>
    </>
  );
};

export default App;