import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 0 0 12px 0;
`;

export const Title = styled.p`
    display: flex;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
`;

export const ProfileImg = styled.img`
    display: flex;
`;

export const FriendSearch = styled.input`
    display: flex;
    width: 100%;
    max-width: 343px;
    height: 34px;
    border: none;
    outline:none;
    padding-left: 12px;
    border-radius: 8px;
    caret-color: #1675FF;
    background-color: #F7F8F9;
`;