import React from 'react';
import {
  VideoSection,
  FAQSection,
  AccordionSection,
  LinkImage,
} from './tutorialOnboardingStyle.js';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { MainContainer, Section, Title } from './startOnboardingStyle.js';
import { userRole } from '../../roles.js';
import helpData from '../../components2/HelpSidebar/helpdata.json';
import FaqAccordion from '../../components2/Accordions/FaqAccordion.jsx';
import { videoLinks } from './onboardingContents.js';

const TutorialOnboarding = () => {
  const role = userRole();
  const allFaqs = helpData[role];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    }
  };

  return (
    <MainContainer>
      <Section>
        <Title>How-To Videos</Title>
        <VideoSection>
          {/* <Carousel responsive={responsive}>
            {videoLinks.map((video, index) => (
              <a
                key={video.id || index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkImage src={video.image} alt={`video-${index}`}/>
              </a>
            ))}
          </Carousel> */}
        </VideoSection>
      </Section>
      <FAQSection>
        <Title>FAQ's</Title>
        <AccordionSection>
          {allFaqs.map((item, index) => (
            <FaqAccordion key={index} {...item} />
          ))}
        </AccordionSection>
      </FAQSection>
    </MainContainer>
  );
};

export default TutorialOnboarding;
