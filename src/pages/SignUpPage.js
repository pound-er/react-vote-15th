import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

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
        <div>회원가입 페이지</div>
        <form onSubmit={signUpDB}>
        <input
        type="id"
        name="id"
        value={inputText.id}
        onChange={onInputChange}
        spellCheck="false"
        />
        <input
        type="email"
        name="email"
        value={inputText.email}
        onChange={onInputChange}
        spellCheck="false"
        />
        <input
        type="pw"
        name="pw"
        value={inputText.pw}
        onChange={onInputChange}
        spellCheck="false"
        />
        <button >회원가입</button>
        </form>
        </>
    )
}

export default SignUpPage;

