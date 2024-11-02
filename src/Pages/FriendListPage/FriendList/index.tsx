import React from "react";
import { useNavigate } from "react-router-dom";
import { ListContainer, Count, FriendItem, FriendName, ProfileImg, NoResult } from "./style";
import phone from '../../../assets/FriendListPage/blue-phone.svg';
import { PhoneIcon } from "../../ChatRoom/components/TopNavBar/style";
import { useRecoilValue } from 'recoil';
import { userDataState } from "../../../recoil/atom";

export interface User {
  id: number;
  name: string;
  profileImage: string;
}

export interface SearchListProps {
  searchTerm: string;
}

const FriendList: React.FC<SearchListProps> = ({ searchTerm }) => {
  const userData = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기
  const navigate = useNavigate();

  // 검색어에 따라 친구 목록 필터링 (userId가 5인 사용자, 진나경을 제외함)
  const filteredUsers = userData.filter((user: User) =>
    user.id !== 5 && user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFriendClick = (id: number) => {
    navigate(`/chat/${id}`); // 친구 id를 URL에 포함하여 대화 페이지로 이동
  };

  const handlePhoneClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파를 막아 FriendItem의 onClick이 실행되지 않도록 함
  };

  return (
    <ListContainer>
      <Count>친구 {filteredUsers.length}명</Count>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user: User) => (
          <FriendItem key={user.id} onClick={() => handleFriendClick(user.id)}>
            <ProfileImg src={user.profileImage} alt={`${user.name} profile`} />
            <FriendName>{user.name}</FriendName>
            <PhoneIcon src={phone} alt="phone-icon" onClick={handlePhoneClick} />
          </FriendItem>
        ))
      ) : (
        <NoResult>검색 결과가 없습니다. 🥹</NoResult>
      )}
    </ListContainer>
  );
};

export default FriendList;

