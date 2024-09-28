import styled from "styled-components";

export const TopNavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(15px); /* 배경 흐리게 처리 */
    background-color: rgba(255, 255, 255, 0.5); /* 반투명한 흰색 배경 */
    padding-bottom: 12px;
`;

export const BackIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 12px;
    &:hover {
        width: 26px;
        height: 26px;
        margin-right: 10px;
    }
`;

export const UserInfoText = styled.div`
    display: flex;
    background-color: white; /* 불투명한 배경 */
    flex-direction: column;  /* 세로로 배치 */
    margin-left: 8px;  /* 텍스트와 프로필 이미지 사이의 여백 */
`;

export const ProfileImg = styled.img`
    display: flex;
    background-color: white; /* 불투명한 배경 */
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

export const Name = styled.div`
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    background-color: white; /* 불투명한 배경 */
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
        width: 26px;
        height: 26px;
    }
    margin-left: auto; /* 오른쪽 끝으로 이동 */
`;