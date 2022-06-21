import VotePage from './pages/VotePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { OverallStyle } from './GlobalStyle';
import VoteResultPage from './pages/VoteResultPage';

function App() {
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
