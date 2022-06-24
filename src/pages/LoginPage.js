import { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState, LoginState } from '../recoil/recoil';
import { API } from '../API/API';
import axios from 'axios';
import { Form, Title, Input, Text, Button } from '../styles/StyleForm';
import { StyledButton } from '../styles/StyledButton';
import { CenteringWrapper } from '../GlobalStyle';
import { useNavigate } from 'react-router-dom';
import {useRecoilValue} from 'recoil';

function LoginPage() {
  const [user, setUser] = useRecoilState(UserState);
  const handleLogin = useSetRecoilState(UserState);
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const onInputChange = useCallback(
    (e) => {
      handleLogin({ ...user, [e.target.name]: e.target.value });
    },
    [user]
  );
  const loginDB = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://pounder-vote.shop/api/login/',
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

        const accesstoken = response.data.token.access;
        localStorage.setItem('token', accesstoken);
        //axios.defaults.headers.common['Authorization'] = accesstoken;

        window.alert("로그인되었씁니다");
        navigate('/');
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);

        if(error.response.data.message ="Wrong password!")
        window.alert('비밀번호가 잘못 되었습니다.');

        else if(error.response.data.message ="User not found!")
        window.alert('사용자를 찾을 수 없습니다.');
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
