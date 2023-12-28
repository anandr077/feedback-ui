import React, { useState, useRef } from 'react';
import {
  SubAccordionContainer,
  SubAccordionTitle,
  SubAccordionContentBox,
  SubContent,
  StyledExpandMoreIcon,
  VideoBtn,
  VideoIcon
} from './subAccordionStyle';

const SubAccordion = ({ title, content, video }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <SubAccordionContainer>
      <SubAccordionTitle onClick={toggleAccordion}>
        {title} <StyledExpandMoreIcon isActive={isActive} />
      </SubAccordionTitle>
      <SubAccordionContentBox isActive={isActive}>
        <SubContent>{content}</SubContent>
        {video && <VideoBtn isActive={isActive}>
          <VideoIcon src="/img/video-circle.png"/>
          Video tutorial
        </VideoBtn>}
      </SubAccordionContentBox>
    </SubAccordionContainer>
  );
};

export default SubAccordion;
