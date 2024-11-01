import styled from "styled-components";

export const StatusBarContainer = styled.div`
    display: flex;
    justify-content: space-between; // 양쪽 끝으로 배치
    align-items: center; // 세로 중앙 정렬
    width: 100%; // 가로 전체를 사용
    padding: 18px 5px 18px 15px;
`;

export const Time = styled.div`
    display: flex;
    font-size: 16.346px;
    font-style: normal;
    font-weight: 500;
`;

export const NetWorkwrapper = styled.div`
    display: flex;
    gap: 7px;
`;