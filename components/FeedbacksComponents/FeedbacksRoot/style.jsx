import styled from 'styled-components';
import {
  assignmentsHeaderProps,
  taskHeaderProps,
} from '../../../utils/headerProps.js';
import { isTeacher } from '.';

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  margin-left: 100px;
  gap: 20px;
  width: 100%;
`;

export const ClassContainer = styled.div`
  margin: 0;
  border-radius: 16px;
  background: #fff;
`;

export const ClassBoxContainer = styled.div`
  padding: 0px 0 20px;
`;

export const ClassTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ClassTitle = styled.div`
  padding: 20px 10px 0;
  font-family: var(--font-family-ibm_plex_sans);
  color: #505050;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Crown = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

export const ClassHeading = styled.div`
  margin: 0 40px;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  box-sizing: border-box;
  font-weight: bold !important;
  color: var(--black);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-s);
  font-weight: 500;
  font-style: normal;
`;

export const ClassBox = styled.label`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 0.75rem !important;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  display: flex;
  align-items: center;
  height: auto;
  margin: 10px 20px 5px;
  padding: 3px;
  background-color: var(--blue-chalk);
  position: relative;
`;

export const StudentList = styled.ul`
  margin-left: 30px;
`;

export const StudentContainer = styled.div`
  overflow-y: scroll;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export const ListItem = styled.li`
  label {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: 0.75rem !important;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    display: flex;
    align-items: center;
  }
`;

export const DialogContiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 10px 20px;
  gap: 20px;
`;
export const StyledTextField = styled.textarea`
  width: 100%;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  color: var(--stack);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--text);
`;

const feedbacksNavElement1Data = {
  home3: '/img/home3-1@2x.png',
  place: 'Home',
};
const feedbacksNavElement2Data = {
  home3: '/img/assignment@2x.png',
  place: 'Assignments',
  className: 'nav-element-1',
};
const feedbacksNavElement3Data = {
  home3: '/img/subject-1@2x.png',
  place: 'Classes',
  className: 'nav-element-2',
};
const feedbacksFrame41Data = {
  maskGroup: '/img/mask-group-1@2x.png',
};
const feedbacksTeacherDashboardHeader22Data = {
  logo: '/img/logo-1@2x.png',
  navElement1Props: feedbacksNavElement1Data,
  navElement2Props: feedbacksNavElement2Data,
  navElement3Props: feedbacksNavElement3Data,
  frame4Props: feedbacksFrame41Data,
};
const feedbacksBreadcrumb25Data = {
  assignments: 'Feedback',
};
const feedbacksBreadcrumb26Data = {
  assignments: 'Physics - thermodynamics assignment questions',
};
const feedbacksButtons7Data = {
  arrowleft: '/img/arrowleft@2x.png',
};
const feedbacksButtons25Data = {
  button: 'Submit',
  // arrowright: "/img/arrowright@2x.png",
  className: 'buttons-4',
};
const feedbacksFrame1317224Data = {
  buttonsProps: feedbacksButtons7Data,
  buttons2Props: feedbacksButtons25Data,
};
const feedbacksFrame1366421Data = {
  q2PoremIpsumDolo:
    'Q2. Porem ipsum dolor sit amet, consectetur adipiscing elit.',
};
const feedbacksFrame1366422Data = {
  q2PoremIpsumDolo:
    'Q3. Porem ipsum dolor sit amet, consectetur adipiscing elit.',
};
const feedbacksFrame13204Data = {
  children: 'Shortcuts',
  className: 'frame-1321-1',
};
const feedbacksFrame13332Data = {
  className: 'frame-1333-2',
};
const feedbacksCommentCard321Data = {
  horemIpsumDolorSi: 'Use More Techniques',
};
const feedbacksCommentCard322Data = {
  horemIpsumDolorSi:
    'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.',
};
const feedbacksCommentCard323Data = {
  horemIpsumDolorSi:
    'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.',
  className: 'comment-card-5',
};
const feedbacksCommentCard324Data = {
  horemIpsumDolorSi:
    'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.',
  className: 'comment-card-6',
};
const feedbacksButtons8Data = {
  arrowleft: '/img/arrowleft@2x.png',
};
const feedbacksButtons26Data = {
  button: 'Next',
  arrowright: '/img/arrowright@2x.png',
};
const feedbacksFrame13172Data = {
  buttonsProps: feedbacksButtons8Data,
  buttons2Props: feedbacksButtons26Data,
};
export const feedbacksFeedbackTeacherLaptopData = {
  headerProps: isTeacher ? assignmentsHeaderProps : taskHeaderProps,
  physicsThermodyna: 'Physics - thermodynamics assignment questions',
  frame1284: '/img/frame-1284@2x.png',
  q1PoremIpsumDolo:
    'Q1. Porem ipsum dolor sit amet, consectetur adipiscing elit?',
  line261: '/img/line-26-8.png',
  line262: '/img/line-26-8.png',
  typeHere: 'Type here....',
  iconsaxLinearMicrophone2: '/img/iconsax-linear-microphone2-1@2x.png',
  line263: '/img/line-26-10@2x.png',
  iconsaxLinearShare: '/img/iconsax-linear-share@2x.png',
  share: 'Share',
  line27: '/img/line-26-10@2x.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
  teacherDashboardHeader2Props: feedbacksTeacherDashboardHeader22Data,
  breadcrumb21Props: feedbacksBreadcrumb25Data,
  breadcrumb22Props: feedbacksBreadcrumb26Data,
  frame13172Props: feedbacksFrame1317224Data,
  frame136641Props: feedbacksFrame1366421Data,
  frame136642Props: feedbacksFrame1366422Data,
  frame13202Props: feedbacksFrame13204Data,
  frame1333Props: feedbacksFrame13332Data,
  commentCard31Props: feedbacksCommentCard321Data,
  commentCard32Props: feedbacksCommentCard322Data,
  commentCard33Props: feedbacksCommentCard323Data,
  commentCard34Props: feedbacksCommentCard324Data,
  frame1317Props: feedbacksFrame13172Data,
};



