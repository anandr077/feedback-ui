import React from 'react';
import {
  Container,
  UserContainer,
  DropDownContainer,
  InputContainer,
  MainContainer,
  TextContainer,
  FeedbackContainer,
  FeedbackButton,
  TextArea,
  Heading,
  ParaContainer,
  DrawerBody,
  DrawerSubjects,
  DrawerInput,
  DrawerVericalNav,
  DrawerVericalNavData,
  DrawerArrowContainer,
  DrawerArrow,
  UserData,
} from './style';
import StyledDropDown from '../../components2/StyledDropDown';
import {
  Button,
  Divider,
  Drawer,
  Input,
  List,
  TextareaAutosize,
} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { isMobileView } from '../ReactiveRender';

const drawerWidth = 275;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: open ? `calc(100% - ${drawerWidth}px)` : '1300px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  background: '#7200E0',
  padding: '16px',
  borderRadius: '12px',
  gap: '4px',
  color: 'white',
  margin: '20px',
  fontFamily: 'IBM Plex Sans',
}));

function IndependentUser() {
  const [selectSubjects, setSelectSubjects] = React.useState([
    {
      id: '0',
      title: 'Select subject',
      link: '/independentUser',
    },
    {
      id: '1',
      title: 'Telugu subject',
      link: '/independentUser',
    },
    {
      id: '2',
      title: 'Englidh subject',
      link: '/independentUser',
    },
  ]);
  const [taskTypes, setTaskTypes] = React.useState([
    {
      id: '0',
      title: 'Task type',
      link: '/independentUser',
    },
    {
      id: '1',
      title: 'type 1',
      link: '/independentUser',
    },
    {
      id: '2',
      title: 'Type 2',
      link: '/independentUser',
    },
  ]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const selectedItemIndex = selectSubjects.findIndex((selectSubject) => {
    return selectSubject.id === selectSubject.id;
  });
  return (
    <>
      {isMobileView() ? (
        <Container style={{ flexDirection: 'column' }}>
          <Heading>Welcome to Jeddle.</Heading>
          <ParaContainer>
            Open our web app in desktop or tablet to get feedback{' '}
          </ParaContainer>
        </Container>
      ) : (
        <Container>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              fontFamily: 'IBM Plex Sans',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                width: '0px', // Set the width to 0
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none', // Hide the scrollbar thumb
              },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>+ New Draft</DrawerHeader>
            <Divider />
            <DrawerBody>
              <DrawerInput placeholder="Search" />
              <p
                style={{
                  fontSize: '12px',
                  lineHeight: '15.6px',
                  fontWeight: '500',
                }}
              >
                SUBJECTS
              </p>
              <DrawerSubjects>
                {[
                  'English1(5)',
                  'English 2 (10)',
                  'Geography (3)',
                  'Drafts(20)',
                ].map((text, index) => (
                  <span
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #DEC7FF',
                      background: 'linear-gradient(0deg, #DEC7FF, #DEC7FF)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontFamily: 'IBM Plex Sans',
                    }}
                  >
                    {text}
                  </span>
                ))}
                <span
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #DEC7FF',
                    background: '#7200E0',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    color: 'white',
                    fontFamily: 'IBM Plex Sans',
                  }}
                >
                  + New Subject
                </span>
              </DrawerSubjects>

              <DrawerVericalNav>
                <DrawerVericalNavData
                  style={{ color: 'white', background: '#7200E0' }}
                >
                  What are lanthanides?
                </DrawerVericalNavData>
                {[
                  'What are lanthanides?',
                  'How does Charles Dickens portray Pip in Great Expections?',
                  'What was the meaning of the first prophecy by the 3 withces in Macbeth',
                  "What is the mora of the short story THe Monkey's Paw",
                ].map((text, index) => (
                  <DrawerVericalNavData>{text}</DrawerVericalNavData>
                ))}
              </DrawerVericalNav>
            </DrawerBody>
          </Drawer>
          <Main open={open} style={{ padding: '0px', height: '100%' }}>
            <DrawerArrowContainer
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <DrawerArrow onClick={handleDrawer}>
                {!open ? (
                  <svg
                    width="28"
                    height="40"
                    viewBox="0 0 28 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_4996_11760)">
                      <rect
                        x="4"
                        y="3"
                        width="20"
                        height="32"
                        rx="4"
                        fill="white"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="4.5"
                        y="3.5"
                        width="19"
                        height="31"
                        rx="3.5"
                        stroke="#F1E7FF"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M11 25L17 19L11 13"
                        stroke="#7200E0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4996_11760"
                        x="0"
                        y="0"
                        width="28"
                        height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.188235 0 0 0 0 0.105882 0 0 0 0 0.447059 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4996_11760"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4996_11760"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="40"
                    viewBox="0 0 28 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_4975_11889)">
                      <rect
                        x="4"
                        y="3"
                        width="20"
                        height="32"
                        rx="4"
                        fill="white"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="4.5"
                        y="3.5"
                        width="19"
                        height="31"
                        rx="3.5"
                        stroke="#F1E7FF"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M17 13L11 19L17 25"
                        stroke="#7200E0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4975_11889"
                        x="0"
                        y="0"
                        width="28"
                        height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.188235 0 0 0 0 0.105882 0 0 0 0 0.447059 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4975_11889"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4975_11889"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
              </DrawerArrow>
            </DrawerArrowContainer>
            <UserContainer>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <DropDownContainer>
                  <StyledDropDown
                    showAvatars={false}
                    search={false}
                    selectedIndex={selectedItemIndex}
                    menuItems={selectSubjects}
                    independent={true}
                  />
                  <StyledDropDown
                    showAvatars={false}
                    search={false}
                    selectedIndex={selectedItemIndex}
                    menuItems={selectSubjects}
                    independent={true}
                  />
                </DropDownContainer>
                <UserData>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '14px',
                      lineHeight: '18.2px',
                      flexDirection: 'column',
                      fontFamily: 'IBM Plex Sans',
                    }}
                  >
                    <p>Welcome Eleaner</p>
                    <p>NSW,Year 12</p>
                  </div>
                  <img
                    src="/icons/taskEditicon.png"
                    width="16px"
                    height="16px"
                  />
                </UserData>
              </div>
              <MainContainer>
                <TextContainer>
                  <InputContainer>
                    <Input
                      disableUnderline={true}
                      style={{
                        width: '100%',
                        padding: '20px 30px 20px 30px',
                        background: 'white',
                      }}
                      placeholder="Enter a question or prompt"
                    />
                    <p>
                      💬 Use a specific question for more accurate feedback{' '}
                    </p>
                  </InputContainer>
                  <TextArea>
                    <TextareaAutosize
                      style={{ width: '100%', height: '100%' }}
                    />
                  </TextArea>
                </TextContainer>
                <FeedbackContainer>
                  <FeedbackButton>Get Feedback</FeedbackButton>
                </FeedbackContainer>
              </MainContainer>
            </UserContainer>
          </Main>
        </Container>
      )}
    </>
  );
}

export default IndependentUser;
