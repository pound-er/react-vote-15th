import { useState,useCallback, useEffect } from 'react';
import { useRecoilState,useSetRecoilState } from 'recoil' ;
import { UserState } from '../recoil/recoil';
import { API } from '../API/API';
import axios from 'axios';

function LoginPage() {
   
  const [user, setUser] = useRecoilState(UserState);
  const handleLogin = useSetRecoilState(UserState);

  const onInputChange = useCallback((e) => {
    handleLogin({...user, [e.target.name]: e.target.value });
  },[user]);

  const loginDB = (e) => {

    e.preventDefault();
    
    axios.defaults.headers.post = null;

    axios.
    post( 
      `${API}/login/`, 
      { 
          id : user.id,
          password : user.pw,          
       }, 
       { 
          headers:{ 
              'Content-type': 'application/json', 
          } 
      } 
      ) 
      .then((response) => { 
        console.log(response.data); 

        setUser({
          id: response.data.id,
          password: response.data.password
        });

        
        const accesstoken = response.data.token;
        localStorage.setItem('token', accesstoken);
        
      })
      .catch((error) => { 

      window.alert("에러에러");

});
    

};
  return (

    <>
    <form onSubmit={loginDB}>
    <input
    type="id"
    name="id"
    value={user.id}
    onChange={onInputChange}
    spellCheck="false"
        />
    <input
     type="pw"
     name="pw"
     value={user.pw}
     onChange={onInputChange}
     spellCheck="false"
     />
  <button >로그인</button>
  </form>
  </>
  );
}

export default LoginPage;
