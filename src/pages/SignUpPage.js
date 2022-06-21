import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API } from "../API/API";
import styled from "styled-components";
import { CenteringWrapper ,Header } from "../GlobalStyle";
import { StyledButton } from "../styles/StyledButton";
function SignUpPage(){

    const navigate = useNavigate();

    const [inputText, setInputText] = useState({
    id: '',
    email: '',
    pw: '',
  });

  const onInputChange = useCallback((e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  },[inputText]);


  const reset = () => {
    setInputText({ id: '', email: '' , pw : ''});
  };

  const signUpDB = (e) => {

      e.preventDefault();
      
      axios.defaults.headers.post = null;

      axios.
      post( 
        'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/signup/', 
        { 
            password : inputText.pw,
            username : inputText.id,
            email : inputText.email,
            
         }, 
         { 
            headers:{ 
                'Content-type': 'application/json', 
            } 
        } 
        ) 
  .then((response) => { 
    console.log(response.data); 
    navigate('/LoginPage');

}) 
  .catch((error) => { 
    console.log(error.response);

    if(error.response.data.username = "해당 사용자 이름은 이미 존재합니다." )
    {
        window.alert("아이디가 중복됩니다");
        signUpDB();
    }

    else if(error.response.data.email = "사용자의 email은/는 이미 존재합니다.")
    {
        window.alert("이메일이 이미 존재합니다.");
        signUpDB();
    }
});
      

  };

    return(
        <>
        <Header>회원가입 페이지</Header>
        <CenteringWrapper>
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
        <StyledButton>회원가입</StyledButton>
        <div>이미 회원이신가요?
            <Link to={`/LoginPage`}>로그인</Link>
        </div>
        </Form>
        
        </CenteringWrapper>
        </>
    )
}

const Form = styled.form`

background-color: rgba(255, 255, 255, 0.25);
height:100%;
width:50%;
padding:20px;
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18);


align-items: center;
justify-content: center;
display:flex;
flex-direction: column;

`
const Input = styled.input`

height:50px;
width:300px;
margin:10px;


`
const Text = styled.div`
font-size:15px;

`


export default SignUpPage;

