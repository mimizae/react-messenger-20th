import React from "react";
import { useLocation } from "react-router-dom";
import { BottomNavContainer, NavItem, Menu, MenuLayout, HomeIndicator  } from "./style";
import { Link } from "react-router-dom";
import FriendIcon from '../../assets/FriendListPage/FriendIcon';
import ChatIcon from '../../assets/FriendListPage/ChatIcon'; 
import StroyIcon from '../../assets/FriendListPage/StoryIcon';

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  return (
    <BottomNavContainer>
      <MenuLayout>
        <NavItem as={Link} to="/" $active={location.pathname === "/"} >
          <FriendIcon color={location.pathname === "/" ? "#1675FF" : "#72787F"} /> {/* 경로에 따라 색상 변경 */}
          <Menu color={location.pathname === "/" ? "#1675FF" : "#72787F"}>친구</Menu>
        </NavItem>
        <NavItem as={Link} to="/chat" $active={location.pathname === "/chat"}>
          <ChatIcon color={location.pathname === "/chat" ? "#1675FF" : "#72787F"} /> {/* 경로에 따라 색상 변경 */}
          <Menu color={location.pathname === "/chat" ? "#1675FF" : "#72787F"}>채팅</Menu>
        </NavItem>
        <NavItem as={Link} to="/story" $active={location.pathname === "/story"}>
          <StroyIcon color={location.pathname === "/story" ? "#1675FF" : "#72787F"} /> {/* 스토리 아이콘은 항상 회색으로 설정 */}
          <Menu color={location.pathname === "/story" ? "#1675FF" : "#72787F"} >스토리</Menu>
        </NavItem>
        </MenuLayout>
      <HomeIndicator/>
    </BottomNavContainer>
  );
};

export default BottomNav;
