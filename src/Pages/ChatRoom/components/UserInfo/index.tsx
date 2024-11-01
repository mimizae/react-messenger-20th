import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../../../recoil/atom';
import { UserInfoContainer, BigProfileImg, Address } from './style';

const UserInfo: React.FC<{ id: number }> = ({ id }) => {
  const userData = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기
  
  // 해당 ID에 맞는 사용자 정보 찾기
  const userInfo = userData.find((user) => user.id === Number(id)) || null;

  return (
    <UserInfoContainer>
      <BigProfileImg src={userInfo?.profileImage} alt="Big Profile" /> {/* 프로필 이미지 표시 */}
      <h2>{userInfo?.name}</h2>
      <p>Facebook 친구입니다</p>
      <Address>서울거주</Address>
    </UserInfoContainer>
  );
};

export default UserInfo;

