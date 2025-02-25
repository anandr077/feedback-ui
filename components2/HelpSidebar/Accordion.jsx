import React, { useState } from 'react';
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  AccordionTitle,
  SectionContent,
  StyledExpandMoreIcon,
} from './accordionStyle';
import SubAccordion from './SubAccordion';
import { SubAccordionLink } from './subAccordionStyle';

const Accordion = ({ title, subtopics, body, open = false }) => {
  const [expanded, setExpanded] = useState(open ? [title] : []);

  const toggleAccordion = (uuids) => {
    setExpanded(uuids);
  };

  return (
    <ReactAccessibleAccordion
      allowMultipleExpanded={false}
      allowZeroExpanded
      preExpanded={expanded}
      onChange={toggleAccordion}
    >
      <AccordionItem uuid={title}>
        <AccordionItemHeading>
          <AccordionTitle as={AccordionItemButton} feedback={body}>
            {title}
            <StyledExpandMoreIcon feedback={body} isActive={expanded.includes(title)} />
          </AccordionTitle>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <SectionContent>
            {body
              ? body
              : subtopics.map((sub, index) =>
                  sub.link ? (
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
                  )
                )}
          </SectionContent>
        </AccordionItemPanel>
      </AccordionItem>
    </ReactAccessibleAccordion>
  );
};

export default Accordion;
