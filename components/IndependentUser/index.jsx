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
import IndepentdentUserSidebar from './IndepentdentUserSidebar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPortfolio } from '../../service';
import Loader from '../Loader';
import { useMediaQuery } from 'react-responsive';

const drawerWidth = 275;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
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
  const [subjectsList, setSubjectsList] = React.useState([
    {
      id: '1',
      question: 'What is photosynthesis?',
      subject: 'Biology',
      lastseenAtTs: 1630340000,
    },
    {
      id: '2',
      question: 'Define inertia.',
      subject: 'Physics',
      lastseenAtTs: 1630338000,
    },
    {
      id: '3',
      question: "Who wrote 'Romeo and Juliet'?",
      subject: 'Literature',
      lastseenAtTs: 1630336000,
    },
    {
      id: '4',
      question: 'What is the Pythagorean theorem?',
      subject: 'Mathematics',
      lastseenAtTs: 1630334000,
    },
    {
      id: '5',
      question: 'Explain the concept of supply and demand.',
      subject: 'Economics',
      lastseenAtTs: 1630332000,
    },
    {
      id: '6',
      question: 'What is the function of mitochondria?',
      subject: 'Biology',
      lastseenAtTs: 1630330000,
    },
    {
      id: '7',
      question: 'Name the chemical elements in H2O.',
      subject: 'Chemistry',
      lastseenAtTs: 1630328000,
    },
    {
      id: '8',
      question: 'Solve for x: 2x + 5 = 15.',
      subject: 'Mathematics',
      lastseenAtTs: 1630326000,
    },
    {
      id: '9',
      question: 'Discuss the impact of globalization.',
      subject: 'Economics',
      lastseenAtTs: 1630324000,
    },
    {
      id: '10',
      question: 'Describe the stages of mitosis.',
      subject: 'Biology',
      lastseenAtTs: 1630322000,
    },
    {
      id: '11',
      question: 'What is the law of conservation of energy?',
      subject: 'Physics',
      lastseenAtTs: 1630320000,
    },
    {
      id: '12',
      question: 'Compare and contrast two novels of your choice.',
      subject: 'Literature',
      lastseenAtTs: 1630318000,
    },
    {
      id: '13',
      question: 'Balance the chemical equation: CH4 + O2 → CO2 + H2O.',
      subject: 'Chemistry',
      lastseenAtTs: 1630316000,
    },
    {
      id: '14',
      question: 'Calculate the GDP of a country.',
      subject: 'Economics',
      lastseenAtTs: 1630314000,
    },
    {
      id: '15',
      question: 'Explain the concept of natural selection.',
      subject: 'Biology',
      lastseenAtTs: 1630312000,
    },
    {
      id: '16',
      question: 'Derive the formula for velocity.',
      subject: 'Physics',
      lastseenAtTs: 1630310000,
    },
    {
      id: '17',
      question: 'Discuss the theme of love in literature.',
      subject: 'Literature',
      lastseenAtTs: 1630308000,
    },
    {
      id: '18',
      question: "What is Avogadro's number?",
      subject: 'Chemistry',
      lastseenAtTs: 1630306000,
    },
    {
      id: '19',
      question: 'Analyze the impact of inflation on an economy.',
      subject: 'Economics',
      lastseenAtTs: 1630304000,
    },
    {
      id: '20',
      question: 'Describe the structure of a cell.',
      subject: 'Biology',
      lastseenAtTs: 1630302000,
    },
    {
      id: '21',
      question: 'Explain the laws of motion.',
      subject: 'Physics',
      lastseenAtTs: 1630300000,
    },
    {
      id: '22',
      question: 'Explore the symbolism in a play of your choice.',
      subject: 'Literature',
      lastseenAtTs: 1630298000,
    },
    {
      id: '23',
      question: 'What is the periodic table?',
      subject: 'Chemistry',
      lastseenAtTs: 1630296000,
    },
    {
      id: '24',
      question: 'Evaluate the impact of trade policies.',
      subject: 'Economics',
      lastseenAtTs: 1630294000,
    },
    {
      id: '25',
      question: 'Compare plant and animal cells.',
      subject: 'Biology',
      lastseenAtTs: 1630292000,
    },
    {
      id: '26',
      question: 'Define momentum.',
      subject: 'Physics',
      lastseenAtTs: 1630290000,
    },
    {
      id: '27',
      question: 'Analyze the character development in a novel of your choice.',
      subject: 'Literature',
      lastseenAtTs: 1630288000,
    },
    {
      id: '28',
      question: 'What is the structure of an atom?',
      subject: 'Chemistry',
      lastseenAtTs: 1630286000,
    },
    {
      id: '29',
      question: 'Discuss the concept of elasticity in economics.',
      subject: 'Economics',
      lastseenAtTs: 1630284000,
    },
    {
      id: '30',
      question: 'Explain the process of DNA replication.',
      subject: 'Biology',
      lastseenAtTs: 1630282000,
    },
    {
      id: '31',
      question: 'Describe the principles of thermodynamics.',
      subject: 'Physics',
      lastseenAtTs: 1630280000,
    },
    {
      id: '32',
      question: 'Evaluate the use of symbolism in a poem.',
      subject: 'Literature',
      lastseenAtTs: 1630278000,
    },
    {
      id: '33',
      question: 'Name the elements in the halogen group.',
      subject: 'Chemistry',
      lastseenAtTs: 1630276000,
    },
    {
      id: '34',
      question: 'Examine the impact of fiscal policy on the economy.',
      subject: 'Economics',
      lastseenAtTs: 1630274000,
    },
    {
      id: '35',
      question: 'Discuss the classification of living organisms.',
      subject: 'Biology',
      lastseenAtTs: 1630272000,
    },
    {
      id: '36',
      question: 'Explain the concept of electric current.',
      subject: 'Physics',
      lastseenAtTs: 1630270000,
    },
    {
      id: '37',
      question: 'Interpret a work of literature from a feminist perspective.',
      subject: 'Literature',
      lastseenAtTs: 1630268000,
    },
    {
      id: '38',
      question: 'What is the pH scale?',
      subject: 'Chemistry',
      lastseenAtTs: 1630266000,
    },
    {
      id: '39',
      question: 'Analyze the impact of trade barriers on international trade.',
      subject: 'Economics',
      lastseenAtTs: 1630264000,
    },
    {
      id: '40',
      question: 'Discuss the process of protein synthesis.',
      subject: 'Biology',
      lastseenAtTs: 1630262000,
    },
    {
      id: '41',
      question: 'Explain the laws of reflection in optics.',
      subject: 'Physics',
      lastseenAtTs: 1630260000,
    },
    {
      id: '42',
      question: 'Evaluate the use of symbolism in a short story.',
      subject: 'Literature',
      lastseenAtTs: 1630258000,
    },
    {
      id: '43',
      question: 'What are isotopes?',
      subject: 'Chemistry',
      lastseenAtTs: 1630256000,
    },
    {
      id: '44',
      question: 'Analyze the impact of interest rates on economic growth.',
      subject: 'Economics',
      lastseenAtTs: 1630254000,
    },
    {
      id: '45',
      question: 'Compare and contrast prokaryotic and eukaryotic cells.',
      subject: 'Biology',
      lastseenAtTs: 1630252000,
    },
    {
      id: '46',
      question: 'Explain the principles of fluid dynamics.',
      subject: 'Physics',
      lastseenAtTs: 1630250000,
    },
    {
      id: '47',
      question: 'Discuss the role of symbolism in a painting of your choice.',
      subject: 'Art',
      lastseenAtTs: 1630248000,
    },
    {
      id: '48',
      question: 'What is the structure of a virus?',
      subject: 'Biology',
      lastseenAtTs: 1630246000,
    },
    {
      id: '49',
      question: 'Describe the laws of thermodynamics.',
      subject: 'Physics',
      lastseenAtTs: 1630244000,
    },
    {
      id: '50',
      question: 'Analyze the use of symbolism in a film.',
      subject: 'Film Studies',
      lastseenAtTs: 1630242000,
    },
  ]);
  const [groupedAndSortedData, setGroupedAndSortedData] = React.useState({});
  const [selectedSubject, setSelectedSubject] = React.useState();

  React.useEffect(() => {
    const groupedData = subjectsList?.reduce((result, item) => {
      const subject = item.subject;

      if (!result[subject]) {
        result[subject] = [];
      }

      result[subject].push(item);

      return result;
    }, {});

    for (const subject in groupedData) {
      if (groupedData.hasOwnProperty(subject)) {
        groupedData[subject].sort((a, b) => b.lastseenAtTs - a.lastseenAtTs);
      }
    }
    setGroupedAndSortedData(groupedData);
    setSelectedSubject(Object.keys(groupedData)[0]);
  }, [subjectsList]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const selectedItemIndex = selectSubjects.findIndex((selectSubject) => {
    return selectSubject.id === selectSubject.id;
  });
  const isMobile = useMediaQuery({ maxWidth: 765 });

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      {isMobile ? (
        <Container style={{ flexDirection: 'column' }}>
          <Heading>Welcome to Jeddle.</Heading>
          <ParaContainer>
            Open our web app in desktop or tablet to get feedback{' '}
          </ParaContainer>
        </Container>
      ) : (
        <Container>
          <IndepentdentUserSidebar
            open={open}
            subjects={groupedAndSortedData}
            setSelectedSubject={setSelectedSubject}
            selectedSubject={selectedSubject}
          />
          <Main
            open={open}
            style={{
              padding: '0px',
              height: '100%',
            }}
          >
            <DrawerArrowContainer>
              <DrawerArrow style={{alignItems:'center'}} onClick={handleDrawer}>
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
