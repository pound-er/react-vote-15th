import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CenteringWrapper } from '../GlobalStyle';
import useInput from '../hooks/useInput';
import { Form, Title, Input, Text, Button, LoginMessage } from '../styles/StyleForm';

function SignUpPage() {
  const navigate = useNavigate();
  const { inputText, onInputChange } = useInput();

  const signUpDB = (e) => {
    e.preventDefault();

    axios.defaults.headers.post = null;

    axios
      .post(
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/signup/',
        {
          password: inputText.pw,
          username: inputText.id,
          email: inputText.email,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate('/LoginPage');
      })
      .catch((error) => {
        console.log(error.response);

        if (
          (error.response.data.username = '해당 사용자 이름은 이미 존재합니다.')
        ) {
          window.alert('아이디가 중복됩니다');
          signUpDB();
        } else if (
          (error.response.data.email = '사용자의 email은/는 이미 존재합니다.')
        ) {
          window.alert('이메일이 이미 존재합니다.');
          signUpDB();
        }
      });
  };

  return (
    <>
      <CenteringWrapper>
        <Title>회원가입 페이지</Title>
        <Form onSubmit={signUpDB}>
          <Text>아이디</Text>
          <Input
            type="id"
            name="id"
            value={inputText.id}
            onChange={onInputChange}
            spellCheck="false"
          />
          <Text>이메일</Text>
          <Input
            type="email"
            name="email"
            value={inputText.email}
            onChange={onInputChange}
            spellCheck="false"
          />
          <Text>비밀번호</Text>
          <Input
            type="pw"
            name="pw"
            value={inputText.pw}
            onChange={onInputChange}
            spellCheck="false"
          />
          <Button>회원가입</Button>
          <div>
            이미 회원이신가요?
            <Link to={`/LoginPage`}>로그인</Link>
          </div>
        </Form>
      </CenteringWrapper>
    </>
  );
}

export default SignUpPage;
