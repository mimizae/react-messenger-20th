import React from "react";
import { ActiveStatusLayout, StatusWrapper, Photo, Name } from "./style";
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

