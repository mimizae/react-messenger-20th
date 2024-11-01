import React from "react";
import { Link } from "react-router-dom";
import BigImg from '../../assets/ChatRoom/BigProfileImg2.svg';
import { SidebarContainer, Overlay, MyProfile, Photo, Name, Title, List } from "./style";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} /> {/* Overlay 클릭 시 사이드바 닫기 */}
      <SidebarContainer $isOpen={isOpen}> {/* isOpen을 $isOpen으로 변경 */}
        <Title>내 프로필</Title>
        <MyProfile>
          <Photo src={BigImg} alt="Profile" />
          <Name>진나경</Name>
        </MyProfile>
        <List as={Link} to="/chat">Chat</List>
        <List as="a" href="https://www.instagram.com/na568._.kyung?igsh=amw0aXU0eDFqdWxn&utm_source=qr" target="_blank" rel="noopener noreferrer">
          Instagram
        </List>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

