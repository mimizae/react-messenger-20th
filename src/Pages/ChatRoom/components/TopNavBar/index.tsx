import React from 'react';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import phone from '../../../../assets/ChatRoom/phone.svg';
import Back from '../../../../assets/ChatRoom/BackButton.svg';
import { userDataState, currentUserIdState, opponentUserIdState } from '../../../../recoil/atom';
import { TopNavBarContainer, BackIcon, PhoneIcon, ProfileImg, UserInfoText, Name, ActiveStatus } from './style';

const TopNavBar: React.FC<{ opponentUserId: number, currentUserId: number  }> = ({ opponentUserId, currentUserId }) => {
    const navigate = useNavigate();
    const userData = useRecoilValue(userDataState); // atom에서 사용자 데이터 가져오기
    const [, setCurrentUserId] = useRecoilState(currentUserIdState);
    const [opponentId, setOpponentUserId] = useRecoilState(opponentUserIdState);

    // 해당 ID에 맞는 사용자 정보 찾기
    const userInfo = userData.find((user) => user.id === Number(opponentId)) || null;

    const handleProfileClick = () => {
      setCurrentUserId(opponentUserId);  // 현재 사용자를 상대방 ID로 설정
      setOpponentUserId(currentUserId);  // 상대방을 현재 사용자 ID로 설정
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
