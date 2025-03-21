import React, { useContext, useState } from 'react';
import {
  HelpSidebarContainer,
  Header,
  IconImg,
  HeaderLeft,
  SearchContainer,
  Input,
  SearchIcon,
  HelpSidebarSmallContainer,
  CloseHelpBar,
  HelpOptionsContainer,
  Onboarding,
  OnboardingIcon,
  CloseImage
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


const HelpSidebar = ({ onCloseFn }) => {
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
      {helpSidebarContent(data, handleSearch, handleOnboardingButtonClick, onCloseFn)}
    </HelpSidebarSmallContainer>
  ) : (
    <HelpSidebarContainer
      onClick={(e) => e.stopPropagation()}
    >
      {helpSidebarContent(data, handleSearch, handleOnboardingButtonClick, onCloseFn)}
    </HelpSidebarContainer>
  );
};

export default HelpSidebar;


function helpSidebarContent(data, handleSearch, handleOnboardingButtonClick, onCloseFn) {
  return (
    <>
      <Header>
        <HeaderLeft>
          <HeadingImage src={helpbing} />
          <Heading>Help Centre</Heading>
        </HeaderLeft>
        <CloseImage src="img/closecircle.svg" onClick={onCloseFn} />
      </Header>
      <SearchContainer>
        <Input
          placeholder="Search for topics"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SearchIcon src="/img/find-replace.png" />
      </SearchContainer>
      <HelpOptionsContainer>
        <Onboarding onClick={handleOnboardingButtonClick}>
          <OnboardingIcon src={onboarding} />
          Onboarding
        </Onboarding>
        {data.map((section, index) => (
          <Accordion key={index} {...section} />
        ))}
      </HelpOptionsContainer>
    </>
  );
}
