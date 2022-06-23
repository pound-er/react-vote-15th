import VotePage from './pages/VotePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { OverallStyle } from './GlobalStyle';
import VoteResultPage from './pages/VoteResultPage';
import axios from 'axios';
import { useEffect } from 'react';
import useRecoilState from 'recoil';
import { UserState } from './recoil/recoil';
import {useRecoilValue} from 'recoil';

function App() {
  
  const user = useRecoilValue(UserState);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/verify/',
          
          {
            token: token,
            withCredentials: true,
            
          },
         { headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
        
      )
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error.type, error.message);
      });
  }, [user]);

  return (
    <>
      <OverallStyle />
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/VoteResultPage" element={<VoteResultPage />} />
      </Routes>
    </>
  );
}

export default App;
