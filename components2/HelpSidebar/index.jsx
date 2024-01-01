import React, { useState } from 'react';
import {
  HelpSidebarContainer,
  Header,
  IconImg,
  SearchContainer,
  Input,
  SearchIcon,
  MoreOption,
  MoreOptionIcon,
  HelpSidebarSmallContainer,
  CloseHelpBar
} from './style';
import Accordion from './Accordion';
import { isSmallScreen } from '../../components/ReactiveRender';
import helpdata from './helpdata.json'


const HelpSidebar = ({onCloseFn}) => {
  const isSmallView = isSmallScreen();
  const [data, setData] = useState(helpdata.data)


  return isSmallView ? (
    <HelpSidebarSmallContainer>
      <CloseHelpBar src="/img/close.png" onClick={onCloseFn}/>
      {helpSidebarContent(data)}
    </HelpSidebarSmallContainer>
  ) : (
    <HelpSidebarContainer onClick={(e) => e.stopPropagation()}>
      {helpSidebarContent(data)}
    </HelpSidebarContainer>
  );
};

export default HelpSidebar;

function helpSidebarContent(data) {
  return (
    <>
      <Header>
        <IconImg src="/img/helpIcon.png" />
        Help Centre
      </Header>
      <SearchContainer>
        <Input placeholder="Search for topics" />
        <SearchIcon src="/img/find-replace.png" />
      </SearchContainer>
      {data.map((section, index) => (
        <Accordion key={index} {...section} />
      ))}
      <MoreOption>
        <MoreOptionIcon src="/img/knowledge-icon.png" />
        Knowledge base
      </MoreOption>
      <MoreOption>
        <MoreOptionIcon src="/img/exportsquare.png" />
        Youtube tutorials
      </MoreOption>
      <MoreOption>
        <MoreOptionIcon src="/img/Message-question-icon.png" />
        Need more help?
      </MoreOption>
    </>
  );
}
