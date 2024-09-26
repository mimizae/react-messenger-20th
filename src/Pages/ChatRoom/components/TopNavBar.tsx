import React from 'react';
import { useNavigate } from 'react-router-dom';  
import styled from 'styled-components';
import Profile1 from '../../../assets/profile.svg';
import Profile2 from '../../../assets/cat.svg';
import phone from '../../../assets/phone.svg';
import Back from '../../../assets/BackButton.svg';

const TopNavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1); // 호버 시 배경색
        border-radius: 50%; // 버튼을 원형으로
    }
`;

const UserInfoText = styled.div`
    display: flex;
    flex-direction: column;  /* 세로로 배치 */
    margin-left: 8px;  /* 텍스트와 프로필 이미지 사이의 여백 */
`;

const ProfileImg = styled.img`
    display: flex;
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-left: 12px;
`;

const Name = styled.div`
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

const ActiveStatus = styled.div`
    color: var(--gray-scale-200, #C9CDD2);
    font-family: "Noto Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.18px;
`;

const PhoneIcon = styled.img`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1); // 호버 시 배경색
        border-radius: 50%; // 버튼을 원형으로
    }
    margin-left: auto; /* 오른쪽 끝으로 이동 */
`;

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
