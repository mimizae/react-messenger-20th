import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import phone from '../../../../assets/ChatRoom/phone.svg';
import Back from '../../../../assets/ChatRoom/BackButton.svg';
import { TopNavBarContainer, BackIcon, PhoneIcon, ProfileImg, UserInfoText, Name, ActiveStatus } from './style';

const TopNavBar: React.FC<{ id: number }> = ({ id }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<{ name: string; profileImage: string } | null>(null);
  
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/mockUserData.json'); // public 폴더에서 JSON 파일 가져오기
                const data = await response.json();
                const user = data.find((user: { id: number }) => user.id === Number(id)); // id에 해당하는 사용자 정보 찾기
                setUserInfo(user); // 사용자 정보 저장
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [id]); // id가 변경될 때마다 데이터 새로 고침

  
    const handleProfileClick = () => {
      // 프로필 사진에 따라 다른 채팅방으로 이동
      if (id === 1) {
        navigate('/chat/3'); // 채팅방 2로 이동
      } else {
        navigate('/chat/1'); // 채팅방 1로 이동
      }
    };

    return (
      <TopNavBarContainer>
        <BackIcon src={Back} alt="Back Button" onClick={() => navigate(-1)} />
        <ProfileImg 
          src={userInfo?.profileImage} // ID에 따라 프로필 사진 선택
          alt="Profile photo" 
          onClick={handleProfileClick} 
        />
        <UserInfoText>
            <Name>{userInfo?.name}</Name>
            <ActiveStatus>현재활동중</ActiveStatus>
        </UserInfoText>
        <PhoneIcon src={phone} alt="Phone Icon" onClick={() => alert('전화 버튼 클릭됨!')}/>
      </TopNavBarContainer>
    );
};

export default TopNavBar;
