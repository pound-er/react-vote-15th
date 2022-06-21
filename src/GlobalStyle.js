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
    
    overflow-y: scroll;
  }
  body::-webkit-scrollbar {
  width: 8px;  /* 스크롤바의 너비 */
}

  body::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: white; /* 스크롤바의 색상 */
  
  border-radius: 10px;
}
body::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
}
`;
