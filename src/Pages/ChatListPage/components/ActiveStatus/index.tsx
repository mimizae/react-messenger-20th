import React from "react";
import { ActiveStatusLayout, StatusWrapper, Photo, Name, StatusContainer, StatusDot   } from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../../../recoil/atom';

const ActiveStatus: React.FC = () => {
  const navigate = useNavigate();
  const users = useRecoilValue(userDataState);

  const handleUserClick = (userId: number) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <ActiveStatusLayout>
    {users
      .filter(user => user.id !== 5) // id가 5인 사용자, 진나경 제외
      .map((user) => (
        <StatusWrapper key={user.id} onClick={() => handleUserClick(user.id)}>
          <StatusContainer>
            <Photo src={user.profileImage} alt={`${user.name} profile`} />
            <StatusDot /> 
          </StatusContainer>
          <Name>{user.name}</Name>
        </StatusWrapper>
      ))}
  </ActiveStatusLayout>
  );
};

export default ActiveStatus;

