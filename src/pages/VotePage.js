import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledBox } from '../styles/StyledBox';
import { InnerBox, Welcome } from '../styles/InnerBox';
import { TitleBox } from '../styles/TitleBox';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper, Header, StyledLink } from '../GlobalStyle';
import { UserState } from '../recoil/recoil';
import { useRecoilValue } from 'recoil';

function VotePage() {
  const [candidates, setCandidates] = useState(null);
  const user = useRecoilValue(UserState);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

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

  const handleVote = (chosenCandidate) => {
    console.log(chosenCandidate.candidate_name);
    axios
      .post(
        'https://pounder-vote.shop/api/vote/',
        { candidate: chosenCandidate.candidate_name },
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        window.alert('투표 되었습니다!');
        console.log(response);

        setCandidates((candidates) =>
          candidates.map((item) => {
            if (item.candidate_name === chosenCandidate) {
              return { ...item, vote_ctn: item.vote_ctn + 1 };
            }
            return item;
          })
        );
      })

      .catch((error) => {
        console.log(error);
        if (error.response.data.message === '투표는 로그인이 필요합니다!') {
          window.alert('로그인 후 투표해주세요');
        } else if (
          error.response.data.message ===
          '모든 파트의 투표를 완료하셨기에 재투표가 불가능합니다!'
        ) {
          window.alert('모든 파트의 투표를 완료하셨습니다!');
        } else if (
          error.response.data.message ===
          '프론트엔드 파트의 투표를 완료하셨기에 재투표가 불가능합니다!'
        ) {
          window.alert('프론트엔드 파트의 투표를 완료하셨습니다!');
        } else if (
          error.response.data.message ===
          '백엔드 파트의 투표를 완료하셨기에 재투표가 불가능합니다!'
        ) {
          window.alert('백엔드 파트의 투표를 완료하셨습니다!');
        }
      });
  };

  /*function refreshToken(){
    const refreshtoken = localStorage.getItem('refreshtoken');
    axios
      .post(
        'https://pounder-vote.shop/api/token/refresh/',
        {
          refresh : refreshtoken,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const accesstoken = response.data.access;
        localStorage.setItem('token', accesstoken);
        const tokening = localStorage.getItem('token');
        console.log(tokening)

      })
      .catch((error) => {
        console.log(error);
        window.alert('토큰갱신에러');
      });
    }*/

  const logoutDB = (e) => {
    e.preventDefault();
    //refreshToken();

    const refreshtoken = localStorage.getItem('refreshtoken');
    console.log(token);
    axios
      .post(
        'https://pounder-vote.shop/api/logout/',
        {
          refresh: refreshtoken,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        window.alert('로그아웃완');
        localStorage.setItem('username', ' ');
      })
      .catch((error) => {
        console.log(error);

        if ((error.response.data.message = '로그아웃이 불가한 상태입니다.'))
          window.alert('로그인을 먼저 해주세요.');
      });
  };

  if (!candidates) return null;

  return (
    <>
      <Header>
        <StyledButton onClick={logoutDB}>로그아웃</StyledButton>
        <StyledButton>
          <StyledLink to={`/LoginPage`}>로그인</StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to={`/SignUpPage`}>회원가입</StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink to={`/VoteResultPage`}>결과화면</StyledLink>
        </StyledButton>
        <Welcome>{username ? `${username} 님 환영합니다!` : null}</Welcome>
      </Header>
      <CenteringWrapper>
        {candidates.map((candidate) => (
          <StyledBox key={candidate.id} onClick={() => handleVote(candidate)}>
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
