import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <ul>
      {candidates.map((user) => (
        <li key={user.id}>
          {user.name} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default VotePage;
