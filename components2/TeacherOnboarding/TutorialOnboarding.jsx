import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  VideoSection,
  FAQSection,
  AccordionSection,
  AccordionTitle,
} from './tutorialOnboardingStyle.js';
import { MainContainer, Section, Title } from './startOnboardingStyle.js';
const accordionItems = [
  {
    title: 'Feedback',
    content:
      "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int",
  },
  {
    title: 'Tasks',
    content:
      "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int",
  },
  {
    title: 'Portfolio',
    content:
      "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int",
  },
  {
    title: 'Drafts',
    content:
      "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int",
  },
];

const TutorialOnboarding = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <MainContainer>
      <Section>
        <Title>How-To Videos</Title>
        <VideoSection>
          <img src="/img/onboardingThumbnail.svg" />
          <img src="/img/onboardingThumbnail.svg" />
          <img src="/img/onboardingThumbnail.svg" />
          <img src="/img/onboardingThumbnail.svg" />
          <img src="/img/onboardingThumbnail.svg" />
        </VideoSection>
      </Section>
      <FAQSection>
        <Title>FAQ's</Title>
        <AccordionSection>
          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                boxShadow: 'none',
                borderBottom: '1px solid rgba(201, 198, 204, 0.5)',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  padding: 0,
                }}
              >
                <AccordionTitle>{item.title}</AccordionTitle>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: 0,
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  '& *': {
                    fontFamily: 'IBM Plex Sans, sans-serif !important',
                  },
                }}
              >
                {item.content}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionSection>
      </FAQSection>
    </MainContainer>
  );
};

export default TutorialOnboarding;
