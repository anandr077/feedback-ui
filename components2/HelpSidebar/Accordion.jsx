import React, { useState } from 'react';
import {
  AccordionSection,
  AccordionTitle,
  SectionContent,
  StyledExpandMoreIcon,
} from './accordionStyle';
import SubAccordion from './SubAccordion';
import { SubAccordionLink } from './subAccordionStyle';

const Accordion = ({ title, subtopics, body,open=false  }) => {
  const [isActive, setIsActive] = useState(open);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleAccordion} feedback={body}>
        {title} <StyledExpandMoreIcon isActive={isActive} feedback={body} />
      </AccordionTitle>
      <SectionContent isActive={isActive}>
        {body
          ? body
          : subtopics.map((sub, index) => {
              return sub.link ? (
                <SubAccordionLink
                  key={index}
                  href={sub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sub.icon && <img src={sub.icon} alt={sub.title} />}
                  {sub.title}
                </SubAccordionLink>
              ) : (
                <SubAccordion
                  key={index}
                  title={sub.title}
                  content={sub.content}
                  video={sub.video}
                />
              );
            })}
      </SectionContent>
    </AccordionSection>
  );
};

export default Accordion;
