import { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState } from '../recoil/recoil';
import { API } from '../API/API';
import axios from 'axios';
import { Form, Title, Input, Text, Button } from '../styles/StyleForm';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper } from '../GlobalStyle';

function LoginPage() {
  const [user, setUser] = useRecoilState(UserState);
  const handleLogin = useSetRecoilState(UserState);
  const onInputChange = useCallback(
    (e) => {
      handleLogin({ ...user, [e.target.name]: e.target.value });
    },
    [user]
  );
  const loginDB = (e) => {
    e.preventDefault();

    axios.defaults.headers.post = null;
    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/login/',
        {
          username: user.id,
          password: user.pw,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUser({
          id: response.data.username,
          pw: response.data.password,
        });

        const accesstoken = response.data.token;
        localStorage.setItem('token', accesstoken);
      })
      .catch((error) => {
        console.log(error);
        window.alert('에러에러');
      });
  };

  return (
    <>
      <CenteringWrapper>
        <Title>로그인 페이지</Title>
        <Form onSubmit={loginDB}>
          <Text>아이디</Text>
          <Input
            type="id"
            name="id"
            value={user.id}
            onChange={onInputChange}
            spellCheck="false"
          />
          <Text>비밀번호</Text>
          <Input
            type="pw"
            name="pw"
            value={user.pw}
            onChange={onInputChange}
            spellCheck="false"
          />
          <StyledButton>로그인</StyledButton>
        </Form>
      </CenteringWrapper>
    </>
  );
}
export default LoginPage;
