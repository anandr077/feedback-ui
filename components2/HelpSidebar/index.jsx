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

const HelpSidebar = ({ onCloseFn, fixedTop }) => {
  const isSmallView = isSmallScreen();
  const [data, setData] = useState(helpdata[userRole()] || []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setData(helpdata.data);
      return;
    }

    const filteredData = helpdata.data.filter(
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
        <IconImg src="/img/helpIcon.png" />
        Help Centre
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
