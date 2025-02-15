import React from 'react';
import {
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CloseButton from '../Buttons/CloseButton';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  IntroMainContainer,
  Title,
  ButtonContainer,
  AccordionSection,
  IntroBodySection,
  AccordionTitle
} from './OnboardingIntroduceStyle';
import { accordionItems } from './OnboardingAccordionItems';

const OnboardingIntroduceSection = ({ onSlideChange, onCloseOnboarding }) => {
  return (
    <DialogContent>
      <CloseButton onclickFn={onCloseOnboarding} />
      <IntroMainContainer>
        <IntroBodySection>
          <Title>Where am I and what is JeddAI?</Title>
          <AccordionSection>
            {accordionItems.map((item, index) => (
              <Accordion
                key={index}
                disableGutters
                sx={{
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <AccordionTitle>{item.title}</AccordionTitle>
                </AccordionSummary>
                <AccordionDetails>{item.content}</AccordionDetails>
              </Accordion>
            ))}
          </AccordionSection>
        </IntroBodySection>
        <ButtonContainer>
          <GrayBackgroundBtn
            buttonText="Previous"
            onClickFn={() => onSlideChange(0)}
            showLeftIcon
          />
          <GrayBackgroundBtn
            buttonText="Next"
            onClickFn={() => onSlideChange(2)}
            showRightIcon
          />
        </ButtonContainer>
      </IntroMainContainer>
    </DialogContent>
  );
};

export default OnboardingIntroduceSection;
