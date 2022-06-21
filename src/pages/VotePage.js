import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledBox } from '../styles/StyledBox';
import { InnerBox } from '../styles/InnerBox';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper, Header } from '../GlobalStyle';

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
    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/vote/',
        { candidate: candidates[index].candidate_name }
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
      <Header>
        <StyledButton>
          <Link to={`/LoginPage`}>로그인</Link>
        </StyledButton>
        <StyledButton>
          <Link to={`/SignUpPage`}>회원가입</Link>
        </StyledButton>
        <StyledButton>
          <Link to={`/VoteResultPage`}>결과화면</Link>
        </StyledButton>
      </Header>
      <CenteringWrapper>
        {candidates.map((user) => (
          <StyledBox key={user.id} onClick={() => handleVote(user.id - 1)}>
            {user.candidate_name}
            <InnerBox>{user.description}</InnerBox>
          </StyledBox>
        ))}
      </CenteringWrapper>
    </>
  );
}

export default VotePage;
