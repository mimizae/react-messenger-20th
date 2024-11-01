import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Count = styled.span`
  margin-top: 22px;
  color: #C9CDD2;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
export const FriendItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  padding: 14px 0;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
`;

export const FriendName = styled.span`
  color: #454C53;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const NoResult = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
`;