import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledBox } from '../styles/StyledBox';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper } from '../GlobalStyle';

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

  const handleVote = (index) => {
    const formData = candidates[index].name;

    const headers = {
      'Content-type': 'multipart/form-data',
    };
    axios.defaults.headers.post = null;

    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/vote/',
        {
          candidate: formData,
        },
        {
          headers,
        }
      )
      .then((response) => {
        console.log(response);
        setCandidates((candidates) =>
          candidates.map((item) => {
            if (item.id === index) {
              return { ...item, vote_ctn: item.vote_ctn + 1 };
            }
            return item;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!candidates) return null;
  return (
    <>
      <Link to={`/LoginPage`}>
        <StyledButton>로그인</StyledButton>
      </Link>
      <Link to={`/SignUpPage`}>
        <StyledButton>회원가입</StyledButton>
      </Link>
      <CenteringWrapper>
        {candidates.map((user) => (
          <StyledBox key={user.id} onClick={() => handleVote(user.id - 1)}>
            {user.candidate_name} ({user.description})
          </StyledBox>
        ))}
      </CenteringWrapper>
    </>
  );
}

export default VotePage;
