import React from 'react';
import bigProfileImg1 from '../../../../assets/BigProfileImg.svg';
import bigProfileImg2 from '../../../../assets/BigProfileImg2.svg';
import { UserInfoContainer, BigProfileImg, Address } from './style';

const UserInfo: React.FC<{ id: number }> = ({ id }) => {
  const getUserInfo = () => {
    if (id === 1) {
      return { name: "세오스", profileImage: bigProfileImg1 };
    } else {
      return { name: "진나경", profileImage: bigProfileImg2 };
    }
  };

  const { name, profileImage } = getUserInfo(); // profileImage 추가


  return (
    <UserInfoContainer>
      <BigProfileImg src={profileImage} alt="Big Profile" /> {/* 프로필 이미지 표시 */}
      <h2>{name}</h2>
      <p>Facebook 친구입니다</p>
      <Address>서울거주</Address>
    </UserInfoContainer>
  );
};

export default UserInfo;

