import React from 'react';
import bigProfileImg1 from '../../../../assets/BigProfileImg.svg';
import bigProfileImg2 from '../../../../assets/BigProfileImg2.svg';
import { UserInfoContainer, BigProfileImg, Address, Time } from './style';

const UserInfo: React.FC<{ id?: string }> = ({ id }) => {
  const getUserInfo = () => {
    if (id === "1") {
      return { name: "세오스", profileImage: bigProfileImg1 };
    } else {
      return { name: "진나경", profileImage: bigProfileImg2 };
    }
  };

  const { name, profileImage } = getUserInfo(); // profileImage 추가

  // 현재 날짜와 시간 가져오기
  const currentDate = new Date();

  // 요일을 한글 짧은 형식으로 가져오기
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekdays[currentDate.getDay()];

  // 시간 포맷
  const hours = currentDate.getHours();
  const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // 2자리로 포맷
  const period = hours >= 12 ? '오후' : '오전';
  const formattedHours = hours % 12 || 12; // 12시간 형식으로 변환

  const formattedTime = `(${dayOfWeek}) ${period} ${formattedHours}:${minutes}`; // 최종 시간 포맷

  return (
    <UserInfoContainer>
      <BigProfileImg src={profileImage} alt="Big Profile" /> {/* 프로필 이미지 표시 */}
      <h2>{name}</h2>
      <p>Facebook 친구입니다</p>
      <Address>서울거주</Address>
      <Time>{formattedTime}</Time> {/* 수정된 시간 표시 */}
    </UserInfoContainer>
  );
};

export default UserInfo;

