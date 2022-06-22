import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 50px;
  width: 300px;
  margin: 10px;
`;
export const Text = styled.div`
  font-size: 15px;
  color: white;
`;
export const Title = styled.div`
  margin: 10px;
  font-size: 30px;
  color: white;
`;

export const Button = styled.button`

width:20%;
height:3rem;
font-size:15px;
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18);
margin:10px;
cursor:pointer;
:hover{
  transform: scale(1.1);
}
`
export const LoginMessage = styled.div`
font-size:16px;
`