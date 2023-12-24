import styled from 'styled-components';
export const Container = styled.div`
  font-family: IBM Plex Sans;
  display: flex;
  justify-content: center;
  background-color: var(--white-pointer);
  height: 75vh;
  overflow-y: scroll;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  max-width: 1300px;
  padding-top: 40px;
  gap: 32px;
  @media (max-width: 1440px) {
    width: 90vw;
  }
  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
export const DropDownContainer = styled.div``;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 70%;
  height: 65vh;
`;
export const TextArea = styled.div`
  height: 45vh;
`;
export const FeedbackContainer = styled.div`
  width: 30%;
  padding: 20px;
  gap: 20px;
  background-color: white;
  height: 60vh;
`;
export const FeedbackButton = styled.div`
display: flex;
justify-content: center;
border-radius:12px;
gap : 8px;
padding :16px;
background: linear-gradient(0deg, #7200e0, #7200e0);
linear-gradient(90deg, #7200e0 0%, #1b006b 98.63%);
border: 1px solid #7200e0;
color: white;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Heading = styled.div`
  font-size: 36px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #9b4be8;
`;
export const ParaContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const DrawerBody = styled.div`
  margin: 20px;
`;
export const DrawerInput = styled.input`
  &::placeholder {
   
    color: #666;
  }
  padding: 9px 12px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #1e252a;
  &:focus {
    outline: none; /* Remove focus outline */
  }
`;
export const DrawerSubjects = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
  padding: 8px;
`;
