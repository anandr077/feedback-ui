import styled from 'styled-components';

export const MainButtonContainer = styled.div`
  position: fixed;
  right: 27px;
  bottom: 45px;
  transition: transform 0.3s ease-in;
  cursor: pointer;
  z-index: 10;

  img{
    height: 60px;
    width: 60px;
  }

  :hover{
    transform: scale(1.1) rotate(10deg); 
  }
`