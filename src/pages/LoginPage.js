import { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState } from '../recoil/recoil';
import axios from 'axios';
import { Form, Title, Input, Text } from '../styles/StyleForm';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper } from '../GlobalStyle';

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(username);

    axios.defaults.headers.post = null;
    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/login/',
        {
          username: username,
          password: password,
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
        localStorage.setItem('access', accesstoken);

        const refreshtoken = response.data.refresh;
        localStorage.setItem('refresh', refreshtoken);
      })
      .catch((error) => {
        window.alert('에러에러');
      });
  };
  return (
    <>
      <CenteringWrapper>
        <Title>로그인 페이지</Title>
        <Form>
          <Text>아이디</Text>
          <Input
            type="id"
            name="id"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            spellCheck="false"
          />
          <Text>비밀번호</Text>
          <Input
            type="pw"
            name="pw"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            spellCheck="false"
          />
          <StyledButton onClick={(e) => handleLogin(e)}>로그인</StyledButton>
        </Form>
      </CenteringWrapper>
    </>
  );
}
export default LoginPage;
