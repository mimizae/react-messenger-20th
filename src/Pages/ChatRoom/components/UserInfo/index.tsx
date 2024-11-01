import React, { useEffect, useState } from 'react';
import { UserInfoContainer, BigProfileImg, Address } from './style';

const UserInfo: React.FC<{ id: number }> = ({ id }) => {
  const [userInfo, setUserInfo] = useState<{ name: string; profileImage: string } | null>(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/mockUserData.json'); // public 폴더에서 JSON 파일 가져오기
                const data = await response.json();
                const user = data.find((user: { id: number }) => user.id === Number(id));
                setUserInfo(user); // 사용자 정보 저장
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [id]); // id가 변경될 때마다 데이터 새로 고침


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

