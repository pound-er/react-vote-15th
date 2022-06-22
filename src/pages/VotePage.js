import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledBox } from '../styles/StyledBox';
import { InnerBox } from '../styles/InnerBox';
import { TitleBox } from '../styles/TitleBox';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper, Header, StyledLink } from '../GlobalStyle';

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
        window.alert('로그인 후 투표해주세요');
      });
  };

  if (!candidates) return null;
  return (
    <>
      <Header>
        <StyledButton>
          <StyledLink to={`/LoginPage`}>로그인</StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to={`/SignUpPage`}>회원가입</StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to={`/VoteResultPage`}>결과화면</StyledLink>
        </StyledButton>
      </Header>
      <CenteringWrapper>
        {candidates.map((user) => (
          <StyledBox key={user.id} onClick={() => handleVote(user.id - 1)}>
            <TitleBox>{user.part}</TitleBox>
            <CenteringWrapper>{user.candidate_name}</CenteringWrapper>
            <InnerBox>{user.description}</InnerBox>
          </StyledBox>
        ))}
      </CenteringWrapper>
    </>
  );
}

export default VotePage;
