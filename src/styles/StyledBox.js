import styled from 'styled-components';

export const StyledBox = styled.section`
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  width: 20%;
  height: 50%;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :hover{
    transform:scale(1.1);
  }
`;
