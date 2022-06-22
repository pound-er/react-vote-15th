import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import { Link } from 'react-router-dom';

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
  font-size:25px;
`;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:25px;
`;

export const OverallStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
    font-family: 'Pretendard';
    font-size:20px;
  }
  html {
    font-size : 16px;
    height: 100%;
  }
  body {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0.35)
    ), url('https://img.besthqwallpapers.com/Uploads/28-10-2019/109424/blue-abstract-background-creative-background-blue-watercolor-stain-background-apple-stock-wallpaper-ios-13.jpg') ;
    height: 100vh;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-opacity: 0.5;
    
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

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 20px;
  color: white;
`;
