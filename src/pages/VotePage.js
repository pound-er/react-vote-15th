import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <ul>
      {candidates.map(user => (
        <li key={user.id}>
          {user.candidate_name} ({user.description})
        </li>
      ))}
    </ul>
  );
}

export default VotePage;
