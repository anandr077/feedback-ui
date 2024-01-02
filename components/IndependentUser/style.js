import styled from 'styled-components';
export const Container = styled.div`
  font-family: IBM Plex Sans;
  display: flex;
  justify-content: center;
  background-color: var(--white-pointer);
  // height:100%;
  height: 75vh;
  // overflow-y: scroll;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 100px 0px 100px;
  gap: 32px;
  height: 100%;
  overflow-y: scroll;
  @media (max-width: 1440px) {
    padding: 40px 60px 0px 60px;
  }
`;
export const UserData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
  height: 43vh;
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
  border-radius: 12px;
  gap: 8px;
  padding: 16px;
  background: linear-gradient(90deg, #7200e0 0%, #1b006b 98.63%);
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px;
  fontfamily: IBM Plex Sans;
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
    outline: none;
  }
`;
export const DrawerSubjects = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
  padding: 8px;
  height: 20vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const DrawerSubject = styled.div`
  padding: 8px 12px;
  border: 1px solid #dec7ff;
  background: linear-gradient(0deg, #dec7ff, #dec7ff);
  border-radius: 12px;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-size: 14px;
  height: fit-content;
  &:hover {
    background: linear-gradient(0deg, #ffefb5, #ffefb5),
      linear-gradient(0deg, #fffae7, #fffae7);
    border: 1px solid #ffefb5;
  }
`;

export const DrawerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 45vh;
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const DrawerQuestion = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: #f2f2f2;
  cursor: pointer;
`;
export const DrawerQuestionButton = styled.div`
padding: 8px 16px 8px 16px;
  border-radius: 30px;
  gap: 4px;
  background: #434343;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;
export const DrawerArrowContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DrawerArrow = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
`;
