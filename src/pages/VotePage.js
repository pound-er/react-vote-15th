import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function VotePage() {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    const fetcthCandidates = async () => {
      try {
        setCandidates(null);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
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

      <ul>
        {candidates.map((user) => (
          <li key={user.id}>
            {user.name} ({user.name})
          </li>
        ))}
      </ul>
    </>
  );
}

export default VotePage;
