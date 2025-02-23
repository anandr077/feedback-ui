import React, { useState } from 'react';
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  SubAccordionContainer,
  SubAccordionTitle,
  SubAccordionContentBox,
  SubContent,
  StyledExpandMoreIcon,
  VideoBtn,
  VideoIcon,
} from './faqSubAccordionStyle.js';

const FaqSubAccordion = ({ title, content, video }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SubAccordionContainer>
      <ReactAccessibleAccordion
        allowZeroExpanded
        preExpanded={isActive ? [title] : []}
        onChange={(uuids) => setIsActive(uuids.includes(title))}
      >
        <AccordionItem uuid={title}>
          <AccordionItemHeading>
            <SubAccordionTitle as={AccordionItemButton}>
              {title} <StyledExpandMoreIcon isActive={isActive} />
            </SubAccordionTitle>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <SubAccordionContentBox isActive={isActive}>
              <SubContent>{content}</SubContent>
              {video && (
                <VideoBtn isActive={isActive}>
                  <VideoIcon src="/img/video-circle.png" />
                  Video tutorial
                </VideoBtn>
              )}
            </SubAccordionContentBox>
          </AccordionItemPanel>
        </AccordionItem>
      </ReactAccessibleAccordion>
    </SubAccordionContainer>
  );
};

export default FaqSubAccordion;
