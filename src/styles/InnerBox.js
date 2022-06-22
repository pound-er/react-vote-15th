import styled from 'styled-components';

export const InnerBox = styled.section`
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  width: 90%;
  height: 80%;
  font-size: 20px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Name = styled.section`
width:50%;
font-size:25px;
:hover{
  transform: scale(1.1);
}
margin-left:0.5rem;
`