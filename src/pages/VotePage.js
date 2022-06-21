import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledBox } from '../styles/StyledBox';

function VotePage() {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    const fetcthCandidates = async () => {
      try {
        setCandidates(null);
        const response = await axios.get(
          'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/vote/'
        );
        setCandidates(response.data);
      } catch (e) {
        console.log(1);
      }
    };

    fetcthCandidates();
  }, []);

  if (!candidates) return null;
  return (
    <>
      <Link to={`/LoginPage`}>
        <button>로그인</button>
      </Link>
      <Link to={`/SignInPage`}>
        <button>회원가입</button>
      </Link>

      {candidates.map((user) => (
        <StyledBox key={user.id}>
          {user.candidate_name} ({user.description})
        </StyledBox>
      ))}
    </>
  );
}

export default VotePage;
