import React, { useState } from 'react';
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
} from './style';
import Accordion from './Accordion';
import { isSmallScreen } from '../../components/ReactiveRender';
import helpdata from './helpdata.json';
import { userRole } from '../../roles';
import helpbing from '../../static/img/help-icon.svg';
import {
  HeadingImage,
  Heading,
} from '../../components/NotificationsMenu/NotificationsBar/style';

const HelpSidebar = ({ onCloseFn, fixedTop }) => {
  const isSmallView = isSmallScreen();
  const role = userRole();
  const [data, setData] = useState(helpdata[role] || []);
  const [searchQuery, setSearchQuery] = useState('');

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
      {helpSidebarContent(data, handleSearch)}
    </HelpSidebarSmallContainer>
  ) : (
    <HelpSidebarContainer
      onClick={(e) => e.stopPropagation()}
      fixedTop={fixedTop}
    >
      {helpSidebarContent(data, handleSearch)}
    </HelpSidebarContainer>
  );
};

export default HelpSidebar;

function helpSidebarContent(data, handleSearch) {
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
        {data.map((section, index) => (
          <Accordion key={index} {...section} />
        ))}
      </HelpOptionsContainer>
    </>
  );
}
