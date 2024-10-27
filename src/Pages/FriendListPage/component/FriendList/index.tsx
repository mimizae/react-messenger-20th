import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListContainer, Count, FriendItem, FriendName, ProfileImg } from "./style";
import phone from '../../../../assets/blue-phone.svg';
import { PhoneIcon } from "../../../ChatRoom/components/TopNavBar/style";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

interface FriendListProps {
  searchTerm: string;
}

const FriendList: React.FC<FriendListProps> = ({ searchTerm }) => {
    const [userData, setUserData] = useState<User[]>([]);
    const navigate = useNavigate();
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/mockUserData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data: User[] = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // 검색어에 따라 친구 목록 필터링
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        filteredUsers.map((user) => (
          <FriendItem key={user.id} onClick={() => handleFriendClick(user.id)}>
            <ProfileImg src={user.profileImage} alt={`${user.name} profile`} />
            <FriendName>{user.name}</FriendName>
            <PhoneIcon src={phone} alt="phone-icon" onClick={handlePhoneClick}/>
          </FriendItem>
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </ListContainer>
  );
};

export default FriendList;
