import React, { useState, useRef } from 'react';
import {
  AccordionSection,
  AccordionTitle,
  AccordionContent,
  SectionContent,
  StyledExpandMoreIcon,
} from './accordionStyle';
import SubAccordion from './SubAccordion';

const Accordion = ({ title, subtopics }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleAccordion}>
        {title} <StyledExpandMoreIcon isActive={isActive} />
      </AccordionTitle>
      <SectionContent isActive={isActive}>
        {subtopics.map((sub, index) => (
          <SubAccordion key={index} title={sub.title} content={sub.content} video={sub.video}/>
        ))}
      </SectionContent>
    </AccordionSection>
  );
};

export default Accordion;
