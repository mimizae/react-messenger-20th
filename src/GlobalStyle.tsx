import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
    }

    body {
    margin: auto;
    max-width: 375px;
    height: 812px;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
