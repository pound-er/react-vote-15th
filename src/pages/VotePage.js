import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledBox } from '../styles/StyledBox';
import { InnerBox, Welcome } from '../styles/InnerBox';
import { TitleBox } from '../styles/TitleBox';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper, Header, StyledLink } from '../GlobalStyle';
import { UserState } from '../recoil/recoil';
<<<<<<< HEAD
import { useRecoilValue } from 'recoil';
=======
import {useRecoilValue} from 'recoil';
>>>>>>> c8de21bf0e73309945b85289a86325ef82214c85

function VotePage() {
  const [candidates, setCandidates] = useState(null);
  const user = useRecoilValue(UserState);
  const token = localStorage.getItem('token');
<<<<<<< HEAD
=======
  
  console.log("투표페이지에서도아이디받기"+user.id);
>>>>>>> c8de21bf0e73309945b85289a86325ef82214c85

  useEffect(() => {
    const fetcthCandidates = async () => {
      try {
        setCandidates(null);
        const response = await axios.get(
          'https://pounder-vote.shop/api/candidate/'
        );
        setCandidates(response.data);
      } catch (e) {
        console.log(1);
      }
    };
    fetcthCandidates();
  }, []);

  const handleVote = (index) => {
    console.log(candidates[index].candidate_name);
    axios
<<<<<<< HEAD
      .post('https://pounder-vote.shop/api/vote/', {
        candidate: candidates[index].candidate_name,
      })
=======
      .post(
        'https://pounder-vote.shop/api/vote/',
        { candidate: candidates[index].candidate_name },
        {
          headers:{
            Authorization: `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',

          }
        }
      )
>>>>>>> c8de21bf0e73309945b85289a86325ef82214c85
      .then((response) => {
        window.alert('투표 되었습니다!');
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
        <Welcome>{user.id ? `${user.id} 님 환영합니다!` : null} </Welcome>
      </Header>
      <CenteringWrapper>
        {candidates.map((candidate) => (
          <StyledBox key={candidate.id} onClick={() => handleVote(candidate.id - 1)}>
            <TitleBox>{candidate.part}</TitleBox>
            <CenteringWrapper>{candidate.candidate_name}</CenteringWrapper>
            <InnerBox>{candidate.description}</InnerBox>
          </StyledBox>
        ))}
      </CenteringWrapper>
    </>
  );
}
export default VotePage;
