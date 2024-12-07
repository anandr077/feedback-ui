import React, { useContext, useState } from 'react';
import {
  HelpSidebarContainer,
  Header,
  IconImg,
  SearchContainer,
  Input,
  SearchIcon,
  HelpSidebarSmallContainer,
  CloseHelpBar,
  HelpOptionsContainer,
  Onboarding,
  OnboardingIcone,
  VideoLinkTag
} from './style';
import Accordion from './Accordion';
import { isSmallScreen } from '../../components/ReactiveRender';
import helpdata from './helpdata.json';
import { userRole } from '../../roles';
import helpbing from '../../static/img/help-icon.svg';
import onboarding from '../../static/icons/External _Link.svg';
import {
  HeadingImage,
  Heading,
} from '../../components/NotificationsMenu/NotificationsBar/style';
import { AppContext } from '../../app.context';
import { getUserRole } from '../../userLocalDetails';

const videoLinks = [
  {
    name: 'Getting Started',
    link: 'https://jeddle.wistia.com/medias/nltfwafxjn',
    icon: 'icons/External _Link.svg'
  },
  {
    name: 'Creating a Task',
    link: 'https://jeddle.wistia.com/medias/pxkf4ankwt',
    icon: 'icons/External _Link.svg'
  },
  {
    name: 'Marking a Task',
    link: 'https://jeddle.wistia.com/medias/vj1ioj8188',
    icon: 'icons/External _Link.svg'
  },
  {
    name: 'Class Insights',
    link: 'https://jeddle.wistia.com/medias/5syf3fudi1',
    icon: 'icons/External _Link.svg'
  }
]

const HelpSidebar = ({ onCloseFn, fixedTop }) => {
  const isSmallView = isSmallScreen();
  const role = userRole();
  const [data, setData] = useState(helpdata[role] || []);
  const [searchQuery, setSearchQuery] = useState('');
  const { setShowStudentOnboarding, setShowTeacherOnboarding } =
    useContext(AppContext);

  const handleOnboardingButtonClick = () => {
    getUserRole() === 'STUDENT'
      ? setShowStudentOnboarding(true)
      : setShowTeacherOnboarding(true);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setData(helpdata[role]);
      return;
    }

    const filteredData = helpdata[role].filter(
      (section) =>
        section.title.toLowerCase().includes(query.toLowerCase()) ||
        section.subtopics.some((subtopic) =>
          subtopic.title.toLowerCase().includes(query.toLowerCase())
        )
    );

    setData(filteredData);
  };

  return isSmallView ? (
    <HelpSidebarSmallContainer>
      <CloseHelpBar src="/img/close.png" onClick={onCloseFn} />
      {helpSidebarContent(data, handleSearch, handleOnboardingButtonClick)}
    </HelpSidebarSmallContainer>
  ) : (
    <HelpSidebarContainer
      onClick={(e) => e.stopPropagation()}
      fixedTop={fixedTop}
    >
      {helpSidebarContent(data, handleSearch, handleOnboardingButtonClick)}
    </HelpSidebarContainer>
  );
};

export default HelpSidebar;


function helpSidebarContent(data, handleSearch, handleOnboardingButtonClick) {
  return (
    <>
      <Header>
        <HeadingImage src={helpbing} />
        <Heading>Help Centre</Heading>
      </Header>
      <SearchContainer>
        <Input
          placeholder="Search for topics"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SearchIcon src="/img/find-replace.png" />
      </SearchContainer>
      <HelpOptionsContainer>
        {getUserRole() !== 'STUDENT' &&
          videoLinks.map((link) => (
            <VideoLinkTag href={link.link} target="_blank">
              <OnboardingIcone src={link.icon} />
              {link.name}
            </VideoLinkTag>
          ))}
        {data.map((section, index) => (
          <Accordion key={index} {...section} />
        ))}
        <Onboarding onClick={handleOnboardingButtonClick}>
          <OnboardingIcone src={onboarding} />
          Onboarding
        </Onboarding>
      </HelpOptionsContainer>
    </>
  );
}
