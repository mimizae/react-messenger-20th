import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import phone from '../../../../assets/ChatRoom/phone.svg';
import Back from '../../../../assets/ChatRoom/BackButton.svg';
import { userDataState } from '../../../../recoil/atom';
import { TopNavBarContainer, BackIcon, PhoneIcon, ProfileImg, UserInfoText, Name, ActiveStatus } from './style';

const TopNavBar: React.FC<{ id: number }> = ({ id }) => {
    const navigate = useNavigate();
    const userData = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기

    // 해당 ID에 맞는 사용자 정보 찾기
    const userInfo = userData.find((user) => user.id === Number(id)) || null;

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
        <PhoneIcon src={phone} alt="Phone Icon" onClick={() => alert('전화 버튼 클릭됨!')} />
      </TopNavBarContainer>
    );
};

export default TopNavBar;
