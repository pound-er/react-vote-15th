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
import Api from './components/customAPI';

function App() {

  const user = useRecoilValue(UserState);

  const token = localStorage.getItem('token');
  
  useEffect(() => {
    axios
      .get(
        'https://pounder-vote.shop/api/login/user/',
         { withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('token')}`,
          },
        }
        
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('username', response.data.username);
        console.log(token);
        
      })
      .catch((error) => {
        console.log(error.data, error.message);
        console.log(error);
        localStorage.setItem('username', " ");
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
