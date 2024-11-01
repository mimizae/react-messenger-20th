import React, { useEffect, useState } from "react";
import { ActiveStatusLayout, StatusWrapper, Photo, Name } from "./style";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  profileImage: string;
}

const ActiveStatus: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/mockUserData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUserClick = (userId: number) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <ActiveStatusLayout>
      {users.map((user) => (
        <StatusWrapper key={user.id} onClick={() => handleUserClick(user.id)}>
          <Photo src={user.profileImage} alt={`${user.name} profile`} />
          <Name>{user.name}</Name>
        </StatusWrapper>
      ))}
    </ActiveStatusLayout>
  );
};

export default ActiveStatus;

