import VotePage from './pages/VotePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { OverallStyle } from './GlobalStyle';
import VoteResultPage from './pages/VoteResultPage';
import axios from 'axios';
import { useEffect } from 'react';
import { UserState} from './recoil/recoil';
import {useRecoilValue ,useRecoilState} from 'recoil';

function App() {

  const user = useRecoilValue(UserState);

  const token = localStorage.getItem('token');
  console.log(token);
  
  useEffect(() => {
    axios
      .post(
        'https://pounder-vote.shop/api/verify/',
          {
            token: token, 
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
        console.log(error.data, error.message);
        console.log(error);
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
