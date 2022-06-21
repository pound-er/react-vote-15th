import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  background-color: white;
  width: 70%;
  height: 70%;
  margin: 2%;
  padding: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const CenteringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OverallStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size : 16px;
    height: 100%;
  }
  body {
    background: linear-gradient(330deg, #2ebfff63, rgba(232,166,255,0.91));
    height: 100vh;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
`;
