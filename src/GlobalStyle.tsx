import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard Variable', sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 100vh;
        background-color: #f0f0f0;
        overflow: hidden;
    }

    #root {
        width: 100%;
        max-width: 375px;
        max-height: 812px;
        height: 100%;
        border-radius: 40px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
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

