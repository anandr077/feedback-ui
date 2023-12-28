import React from 'react';
import {
  HelpSidebarContainer,
  Header,
  IconImg,
  SearchContainer,
  Input,
  SearchIcon,
  MoreOption,
  MoreOptionIcon,
} from './style';
import Accordion from './Accordion';

const data = [
  {
    title: 'Focus Areas',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Feedback',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Tasks',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Portfolio',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Drafts',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Exemplar response',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
        video: 'true',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Marking Criteria',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
  {
    title: 'Account',
    subtopics: [
      {
        title: 'What are focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'How do focus areas work?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
      {
        title: 'Managing focus areas?',
        content:
          'Fragment this quotation into smaller parts and integrate into different sections',
      },
    ],
  },
];

const HelpSidebar = () => {
  return (
    <HelpSidebarContainer onClick={(e) => e.stopPropagation()}>
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
    </HelpSidebarContainer>
  );
};

export default HelpSidebar;
