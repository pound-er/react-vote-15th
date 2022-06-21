import {useState, useCallback} from 'react';

function useInput(){

    const [inputText, setInputText] = useState({
        id: '',
        email: '',
        pw: '',
      });
    
      const onInputChange = useCallback((e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value });
      },[inputText]);

      return {inputText,onInputChange};
};

export default useInput;