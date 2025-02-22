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
import { onboardingTutorialsFAQ } from './onboardingContents.js';
const videoLinks = [
  {
    image: '/img/howToClass.svg',
    link: 'https://fast.wistia.net/embed/iframe/pxkf4ankwt',
  },
  {
    image: '/img/howToClass.svg',
    link: 'https://fast.wistia.net/embed/iframe/vj1ioj8188',
  },
  {
    image: '/img/howToClass.svg',
    link: 'https://fast.wistia.net/embed/iframe/5syf3fudi1',
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
          {videoLinks.map((video, index) => (
            <a
              key={video.id || index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={video.image} />
            </a>
          ))}
        </VideoSection>
      </Section>
      <FAQSection>
        <Title>FAQ's</Title>
        <AccordionSection>
          {onboardingTutorialsFAQ.map((item, index) => (
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
