import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
`;

export const DrawerInputBox = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #1e252a;
  border-radius: 8px;
`;

export const DrawerInput = styled.input`
  &::placeholder {
    color: #979797;
  }
  padding: 9px 12px;
  width: 92%;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 24px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SubjectTitle = styled.p`
  font-size: 12px;
  line-height: 15.6px;
  font-weight: 600;
  font-family: var(--font-family-ibm_plex_sans);
  letter-spacing: 1px;
  color: #6f6f6f;
  margin-top: 5px;
`;

export const DrawerSubjects = styled.div`
  display: flex;
  width: fit-content;
  white-space: nowrap;
  gap: 8px;
  max-height: 20vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const DrawerSubject = styled.div`
  padding: 8px 12px;
  border: 1px solid #ffefb5;
  background: linear-gradient(0deg, #dec7ff, #dec7ff);
  border-radius: 22px;
  cursor: pointer;
  font-family: 'IBM Plex Sans';
  font-size: 14px;
  line-height: 18.2px;
  color: #434343;
  font-weight: 600;
  &:hover {
    background: linear-gradient(0deg, #ffefb5, #ffefb5),
      linear-gradient(0deg, #fffae7, #fffae7);
    border: 1px solid #ffefb5;
  }
`;

export const StyledMoreVertIcon = styled(MoreVertIcon)`
  font-size: 15px !important;
  width: 0 !important;
  transform: scaleX(0) !important;
  transition: transform 0.3s ease-in !important;
`;

export const RecentBtn = styled.div`
  padding: 8px 12px;
  border: 1px solid #DEC7FF;
  background: var(--blue-chalk-2);
  border-radius: 22px;
  cursor: pointer;
  color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: 14px;
  line-height: 18.2px;
  display: flex;
  align-items: center;
  gap: 2px;

  &:hover{
    background: #FCEAAA;
  }

  &:hover ${StyledMoreVertIcon} {
    width: auto !important;
    transform: scaleX(1) !important; 
  }
`;

export const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  font-size: 15px !important;
`;

export const DrawerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => `${props.pageHeight}px`};
  gap: 10px !important;
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const DrawerQuestion = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 20.8px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #F2F2F2;
  color: #000000;
  white-space: nowrap;
  position: relative;
  cursor: pointer;

  &:hover{
    background: #DBD9D9;
  }
`;

export const OverflowShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 40px;
  background: linear-gradient(to right, rgba(242, 242, 242, 0) 0%, #F2F2F2 60%, #F2F2F2 100%);
  border-radius: 0 8px 8px 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
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

export const DividerContainer = styled.div`
  margin: 0 20px;
`;

export const LoadingDiv = styled.div`
  padding: 20px 0;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  color: var(--text);
  font-weight: 500;
`;
