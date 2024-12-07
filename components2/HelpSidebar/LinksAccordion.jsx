import React from 'react';
import { useState } from 'react';
import { OnboardingIcone, LinkHeading, VideoLinkTag } from './style';
import { StyledExpandMoreIcon } from './accordionStyle';

const LinksAccordion = ({links}) => {
  const [isShowTutorials, setIsShowTutorials] = useState(false);
  return (
    <>
      <LinkHeading onClick={()=> setIsShowTutorials(!isShowTutorials)}>
        Tutorials <StyledExpandMoreIcon isActive={isShowTutorials} />
      </LinkHeading>
      {isShowTutorials && links.map((link) => (
        <VideoLinkTag href={link.link} target="_blank">
          <OnboardingIcone src={link.icon} />
          {link.name}
        </VideoLinkTag>
      ))}
    </>
  );
};

export default LinksAccordion;
