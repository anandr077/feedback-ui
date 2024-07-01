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

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SidebarContainer = styled.div`
  background-color: white;
  border-right: 1px solid rgba(201, 198, 204, 0.5);
  border-top: 1px solid rgba(201, 198, 204, 0.5);
  box-shadow: -1px 4px 4px 0px rgba(115, 115, 115, 0.25);
  width: ${(props) => props.drawerWidth + 'px'};
  transform: translateX(
    ${(props) => (props.open ? '0' : `-${props.drawerWidth}px`)}
  );
  transition: transform 0.3s ease-in;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  /* height: calc(100vh); */
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  position: fixed;
  z-index: 5;
`;

export const DrawerHeader = styled.div`
  height: 40px !important;
  display: grid;
  place-items: center;
  background: var(--light-mode-purple);
  padding: 8px 12px;
  border-radius: 32px;
  color: var(--white);
  margin: 8px;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  line-height: 24px;
  position: relative;
  cursor: pointer;
  text-align: center;
`;

// width: ${props => (props.isOpen ? '300' : '200')};
//   /* width: 300px;  */
//   height: 100vh;
//   overflow-x: hidden; // Hide content when sidebar is collapsed
//   transition: width 0.3s; // Smooth transition for collapsing and expanding
//   background-color: #f0f0f0; // Example background color
//   position: fixed; // Needed for sticky positioning context
//   align-self: stretch;
//   top: 70px
//   overflow-y: scroll;

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
  margin: 8px;
`;

export const Heading = styled.p`
  font-size: var(--font-size-xl);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  line-height: 26px;
  color: var(--text);
`;

export const DrawerInputBox = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgba(145, 139, 151, 1);
  border-radius: 8px;
`;

export const DrawerInput = styled.input`
  &::placeholder {
    color: rgba(151, 151, 151, 1);
  }
  padding: 6px 8px;
  width: 92%;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 24px;
  font-weight: 400;
  color: rgba(151, 151, 151, 1);
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
  font-weight: 500;
  font-family: var(--font-family-ibm_plex_sans);
  color: rgba(111, 111, 111, 1);
`;

export const DrawerSubjects = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
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
  background: ${(props) =>
    props.selected ? 'rgba(241, 230, 252, 1)' : 'white'};
  border: ${(props) =>
    props.selected ? '1px solid rgba(241, 230, 252, 1)' : '1px solid rgba(201, 198, 204, 0.5)'};
  color: ${(props) => (props.selected ? 'rgba(114, 0, 224, 1)' : 'rgba(123, 115, 130, 1)')};
  border-radius: 22px;
  cursor: pointer;
  font-family: 'IBM Plex Sans';
  font-size: 14px;
  line-height: 18.2px;
  font-weight: 600;
  &:hover {
    background: #e5c9ff;
    color: var(--royal-purple);
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
  border: 1px solid #dec7ff;
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

  &:hover {
    background: #fceaaa;
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
  gap: 10px !important;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const MenuItemsDots = styled.img`
  cursor: pointer;
`;
export const QuestionTitle = styled.div`
  //width: 235px;
  //margin-bottom: 10px;
  max-height: 25px;
  line-height: 20px;
  padding-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  //-webkit-transition: max-height 1s;
  //-moz-transition: max-height 1s;
  //-ms-transition: max-height 1s;
  //-o-transition: max-height 1s;
  transition: max-height 1s;
`;
export const MenuItemsContainer = styled.div`
  position: relative;
  display: none;
`;
export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  justify-content: space-between;
  border-top: 1px solid transparent;
  //transition: 0.7s ease-in;

  background: ${(props) =>
    props.studentStyle ? 'rgba(241, 230, 252, 1)' : 'transparent'};
  color: ${(props) =>
    props.studentStyle ? 'var(--white) !important' : 'var(--text)'};
`;
export const LeftPart = styled.div`
  display: flex;
  width: 147px;
  height: 18px;
  justify-content: space-between;
`;
export const RightPart = styled.div`
  display: flex;
  height: 18px;
  gap: 4px;
  cursor: pointer;
`;
export const EachMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  gap: 4px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
export const EachMenuItemImg = styled.img`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const EachMenuItemText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  color: ${(props) =>
    props.purpleColor ? 'white' : 'var(--light-mode-purple)'};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const EachMenuItemTextDel = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) =>
    props.studentStyle ? 'var(--white) !important' : '#a93421'};
`;
export const DrawerQuestion = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: ${(props) => (props.studentStyle ? '500' : '400')};
  font-size: var(--font-size-s);
  line-height: 17px;
  padding: 12px;
  border-radius: 6px;
  background: ${(props) =>
    props.studentStyle ? 'rgba(241, 230, 252, 1)' : 'transparent'};
  color: ${(props) => (props.studentStyle ? 'rgba(114, 0, 224, 1)' : 'rgba(75, 70, 79, 1)')};
  position: relative;

  transition: 0.3s ease-in;
  max-height: 41px;
  overflow: hidden;
  cursor: pointer;

  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  -ms-transition: max-height 1s;
  -o-transition: max-height 1s;
  transition: max-height 1s;

  &:hover {
    max-height: 1520px;

    ${QuestionTitle} {
      max-height: 1500px;
      text-overflow: clip;
      white-space: normal;
    }
    ${MenuItems} {
      border-color: #d6d6d6;
    }
  }

  &:hover .tooltip-text {
    visibility: visible;
  }
`;

export const AvatarImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
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
  margin: 0 10px;
`;

export const LoadingDiv = styled.div`
  padding: 20px 0;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  color: var(--text);
  font-weight: 500;
`;

export const TickBox = styled.div`
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
`;
