import styled from "styled-components";

export const TopNavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1); // 호버 시 배경색
        border-radius: 50%; // 버튼을 원형으로
    }
`;

export const UserInfoText = styled.div`
    display: flex;
    flex-direction: column;  /* 세로로 배치 */
    margin-left: 8px;  /* 텍스트와 프로필 이미지 사이의 여백 */
`;

export const ProfileImg = styled.img`
    display: flex;
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-left: 12px;
`;

export const Name = styled.div`
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

export const ActiveStatus = styled.div`
    color: var(--gray-scale-200, #C9CDD2);
    font-family: "Noto Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.18px;
`;

export const PhoneIcon = styled.img`
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