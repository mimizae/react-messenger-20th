import React from "react";
import { NavContainer, NavItem, Icon, Menu } from "./style";
import { Link } from "react-router-dom";
import Friend_Icon from '../../../../assets/Friend-icon.svg'
import ChatIcon from '../../../../assets/Chat-icon.svg';

const BottomNav: React.FC = () => {
  return (
    <NavContainer>
        <NavItem as={Link} to="/">
            <Icon src={Friend_Icon} alt="FriendIcon"/>
            <Menu>친구</Menu>
        </NavItem>
        <NavItem>
            <Icon src={ChatIcon} alt="ChatIcon"/>
            <Menu>채팅</Menu>
        </NavItem>
        <NavItem>
            <Icon src={ChatIcon} alt="ChatIcon"/>
            <Menu>스토리</Menu>
        </NavItem>
    </NavContainer>
  );
};

export default BottomNav;