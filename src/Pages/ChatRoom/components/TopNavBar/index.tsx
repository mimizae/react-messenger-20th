import React from 'react';
import { useNavigate } from 'react-router-dom';
import Profile1 from '../../../../assets/profile.svg';
import Profile2 from '../../../../assets/cat.svg';
import phone from '../../../../assets/phone.svg';
import Back from '../../../../assets/BackButton.svg';
import { TopNavBarContainer, BackIcon, PhoneIcon, ProfileImg, UserInfoText, Name, ActiveStatus } from './style';

const TopNavBar: React.FC<{ id?: string }> = ({ id }) => {
    const navigate = useNavigate();
  
    const handleProfileClick = () => {
      // 프로필 사진에 따라 다른 채팅방으로 이동
      if (id === "1") {
        navigate('/chat/2'); // 채팅방 2로 이동
      } else {
        navigate('/chat/1'); // 채팅방 1로 이동
      }
    };

    const getUserInfo = () => {
      if (id === "1") {
        return { name: "세오스", profileImage: Profile1 };
      } else {
        return { name: "진나경", profileImage: Profile2 };
      }
    };

    const { name, profileImage } = getUserInfo();

    return (
      <TopNavBarContainer>
        <BackIcon src={Back} alt="Back Button" onClick={() => navigate(-1)} />
        <ProfileImg 
          src={profileImage} // ID에 따라 프로필 사진 선택
          alt="Profile photo" 
          onClick={handleProfileClick} 
        />
        <UserInfoText>
            <Name>{name}</Name>
            <ActiveStatus>현재활동중</ActiveStatus>
        </UserInfoText>
        <PhoneIcon src={phone} alt="Phone Icon" onClick={() => alert('전화 버튼 클릭됨!')}/>
      </TopNavBarContainer>
    );
};

export default TopNavBar;
