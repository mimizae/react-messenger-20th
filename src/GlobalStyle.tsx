import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard Variable', sans-serif;
    }

    body {
        max-width: 375px;
        min-height: 812px;
        overflow-y: auto; /* 스크롤이 필요한 경우 처리 */
        position: relative; /* 고정된 요소를 위한 기준점 설정 */
        border-radius: 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        margin: 0 auto; /* 중앙 정렬을 위한 margin 설정 */
        background-color: white; /* 배경색 설정 (optional) */
    }
    
    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: url('/font/PretendardVariable.woff2') format('woff2-variations');
    }
`;

export default GlobalStyle;

