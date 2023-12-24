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
                    }}
                  >
                    {text}
                  </span>
                ))}
              </DrawerSubjects>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </Drawer>
          <Main open={open} style={{ padding: '0px', height: '100%' }}>
            <div
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <IconButton style={{ height: '40px' }} onClick={handleDrawer}>
                {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <UserContainer>
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
